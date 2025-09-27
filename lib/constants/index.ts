export const APP_NAME =  process.env.NEXT_PUBLIC_APP_NAME || 'Prostore'
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'A moden ecomerce store built with Next.js'
export const SERVER_URL = process.env.NEXT_PUYBLIC_SERVER_URL || 'http://localhost:3000'
export const LATEST_PRODUCTS_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT) || 4

export const signInDefaultValues = {
  email: 'admin@email.com',
  password: '123456',
}

export const signUpDefaultValues = {
  name: 'Mike',
  email: 'test@email.com', 
  password: '123456',
  confirmPassword: '123456'
}