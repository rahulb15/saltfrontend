// components/Modals/OTPVerificationModal/OTPVerificationModal.tsx
import React, { useState, useRef, useEffect, RefObject } from 'react';
import { XCircle } from 'lucide-react';

interface OTPVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
  onVerificationSuccess: (otp: string) => void;
  onVerificationFailed: (error: string) => void;
}

const OTPVerificationModal: React.FC<OTPVerificationModalProps> = ({
  isOpen,
  onClose,
  phoneNumber,
  onVerificationSuccess,
  onVerificationFailed
}) => {
  // State management
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSendingOTP, setIsSendingOTP] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(0);

  // Create array of refs
  const inputRefs = useRef<Array<RefObject<HTMLInputElement>>>(
    Array(6).fill(null).map(() => React.createRef<HTMLInputElement>())
  );
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Effects
  useEffect(() => {
    if (isOpen) {
      handleSendOTP();
      inputRefs.current[0].current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      resetState();
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (countdown > 0) {
      timerRef.current = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [countdown]);

  // Helper functions
  const resetState = () => {
    setOtp(Array(6).fill(''));
    setError('');
    setIsLoading(false);
    setIsSendingOTP(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleSendOTP = async () => {
    try {
      setIsSendingOTP(true);
      setError('');

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/otp/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone: phoneNumber })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send OTP');
      }

      setCountdown(30);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send OTP';
      setError(errorMessage);
      onVerificationFailed(errorMessage);
    } finally {
      setIsSendingOTP(false);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
  
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
  
    // Only continue if we have a valid digit
    if (value) {
      if (index < 5) {
        // Move to next input if not last digit
        inputRefs.current[index + 1].current?.focus();
      } else if (index === 5) {
        // If it's the last digit and we have all 6 digits
        const completeOtp = [...newOtp];
        completeOtp[5] = value.slice(-1);
        
        if (completeOtp.every(digit => digit !== '')) {
          handleVerifyOTP(completeOtp.join('')); // Pass the complete OTP
        }
      }
    }
  };
  
  const handleVerifyOTP = async (otpString?: string) => {
    const verifyOtp = otpString || otp.join('');
    
    // Validate OTP length before making API call
    if (verifyOtp.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }
  
    try {
      setIsLoading(true);
      setError('');
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/otp/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: phoneNumber,
          otp: verifyOtp
        })
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Invalid OTP');
      }
  
      onVerificationSuccess(verifyOtp);
      onClose(); // Close modal after successful verification
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Verification failed';
      setError(errorMessage);
      onVerificationFailed(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1].current?.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1].current?.focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').trim();
    if (!/^\d+$/.test(pasteData)) return;
  
    const digits = pasteData.slice(0, 6).split('');
    const newOtp = [...otp];
    digits.forEach((digit, index) => {
      if (index < 6) newOtp[index] = digit;
    });
    setOtp(newOtp);
  
    // If we got all 6 digits from paste, verify immediately
    if (digits.length === 6) {
      handleVerifyOTP(digits.join(''));
    } else {
      // Focus the next empty input
      inputRefs.current[digits.length].current?.focus();
    }
  };

  if (!isOpen) return null;

  const handleVerifyButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleVerifyOTP();
  };

  return (
    <div className="otp-modal">
      <div className="otp-modal-overlay" onClick={onClose}></div>
      
      <div className="otp-modal-content">
        <button className="otp-modal-close" onClick={onClose}>
          <XCircle size={24} />
        </button>

        <div className="otp-modal-header">
          <h2>Verify Your Phone</h2>
          <p>Enter the 6-digit code sent to</p>
          <p className="phone-number">{phoneNumber}</p>
        </div>

        <div className="otp-input-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs.current[index]}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={e => handleInputChange(index, e.target.value)}
              onKeyDown={e => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="otp-input"
              disabled={isLoading}
            />
          ))}
        </div>

        {error && <div className="otp-error-message">{error}</div>}

        <div className="otp-modal-footer">
          <button
            className="otp-verify-button"
  onClick={handleVerifyButtonClick}
            disabled={otp.includes('') || isLoading}
          >
            {isLoading ? 'Verifying...' : 'Verify OTP'}
          </button>

          <button
            className="otp-resend-button"
            onClick={handleSendOTP}
            disabled={countdown > 0 || isSendingOTP}
          >
            {countdown > 0
              ? `Resend OTP in ${countdown}s`
              : isSendingOTP
              ? 'Sending...'
              : 'Resend OTP'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationModal;