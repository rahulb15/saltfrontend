'use client'

import { useEffect } from 'react'

export default function ChatwayWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.id = 'chatway'
    script.async = true
    script.src = 'https://cdn.chatway.app/widget.js?id=on9fFCJASOtl'
    document.body.appendChild(script)

    return () => {
      if (document.getElementById('chatway')) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return null
}