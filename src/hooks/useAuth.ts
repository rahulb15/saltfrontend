// hooks/useAuth.ts
import { useSelector } from 'react-redux';
import { 
  selectCurrentUser, 
  selectIsAuthenticated, 
  selectToken 
} from '@/redux/slices/authSlice';

export const useAuth = () => {
  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const token = useSelector(selectToken);

  return {
    user,
    isAuthenticated,
    token,
  };
};