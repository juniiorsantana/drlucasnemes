import { MetadataRoute } from 'next'
import { DOCTOR_NAME, CLINIC_NAME } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${DOCTOR_NAME} — ${CLINIC_NAME}`,
    short_name: DOCTOR_NAME,
    description: 'Médico Nutrólogo especialista em emagrecimento e performance em Cuiabá.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0D1A1A',
    theme_color: '#0D1A1A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
