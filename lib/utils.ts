import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// convert prisma object into regular js object
export function convertToPlaiObject<T>(value: T): T{
  return JSON.parse(JSON.stringify(value));
}

// format number with decimal places
export function formatNumberWithDecimal(num: number):string{
  const [int, decimal] = num.toString().split('.')
  return decimal ? `${int}.${decimal.padEnd(2, '0')}`:  `${int}.00`
}

// format errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(error: any) {
  if(error.name === 'ZodError'){
    //  handle zod errors
    const parsedError = JSON.parse(error)
    const fieldErrors = parsedError.map((error: any) => error.message)
    return fieldErrors.join('. ')
  }else if (error.name === 'PrismaClientKnownRequestError' && error.code === 'P2002'){
    // handle prisma error
    const field = error.meta?.target ? error.meta.target[0] : 'Field'
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already taken`
  }else{
    // handle other errors
    return typeof error.message === 'string' ? error.message : JSON.stringify(error.message)
  }
}