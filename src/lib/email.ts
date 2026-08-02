export type EmailData = Record<string, unknown>

export async function SendEmail(data: EmailData): Promise<boolean> {
  try {
    const response = await fetch("https://formsubmit.co/ajax/2638cb9fc1a5b4965fcc66a9cb4aa8e1", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (response.ok) {
      console.log('Success:', await response.json())
      return true
    } else {
      console.error('Error:', await response.json())
      return false
    }
  } catch (error) {
    console.error('Error:', error)
    return false
  }
}
