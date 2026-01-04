import { generateAccessToken, paypal } from "../lib/paypal";

// test to generate access token from paypal
test('generates token from paypal', async() => {
  const tokenResopnse = await generateAccessToken();
  expect(typeof tokenResopnse).toBe('string')
  expect(tokenResopnse.length).toBeGreaterThan(0)
})

// test to create a paypal order
test('creates a paypal order', async() => {
  const price = 10.0

  const orderResponse = await paypal.createOrder(price)

  expect(orderResponse).toHaveProperty('id')
  expect(orderResponse).toHaveProperty('status')
  expect(orderResponse.status).toBe('CREATED')
})


// test to capture payment with mock order
test('simulate capturing a payment from an order', async() => {
  const orderId = '100'

  const mockCapturePayment = jest
    .spyOn(paypal, 'capturePayment')
    .mockResolvedValue({
      status: 'COMPLETED'
    })

  const captureResponse = await paypal.capturePayment(orderId)

  expect(captureResponse).toHaveProperty('status', 'COMPLETED')

  mockCapturePayment.mockRestore()
})