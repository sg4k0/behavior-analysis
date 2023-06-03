import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
if (import.meta.env.DEV === true) {
  console.log('Connecting Dev')
  connectAuthEmulator(auth, 'http://localhost:9099')
} else if (import.meta.env.MODE === 'test') {
  console.log('Connecting Test')
  connectAuthEmulator(auth, 'http://emulator:9099')
}
