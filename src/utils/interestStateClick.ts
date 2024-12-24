export const interestStateClick = async (jobId: string, state: boolean, setRefresh?: (refresh: (prev: boolean) => boolean) => void) => {
  const JWT = process.env.NEXT_PUBLIC_API_URL_JWT_TOKEN
  await fetch(`http://${process.env.API_URL}:3000/job/change-interested/${jobId}/${state}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JWT}`, // JWT as a Bearer Token
    }
  })
  if (setRefresh) setRefresh((prev: boolean) => !prev)

}