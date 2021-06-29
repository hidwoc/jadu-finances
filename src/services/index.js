export const baseURLSales = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/sales`
export const baseURLExpenses = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/expenses`

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}