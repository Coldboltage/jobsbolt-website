export const interestStateClick = async (jobId: string, state: boolean, jwt: string, setRefresh?: (refresh: (prev: boolean) => boolean) => void) => {

  await fetch(`http://${process.env.NEXT_PUBLIC_CLIENT_API_URL}:3000/api/job/change-interested/${jobId}/${state}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`, // JWT as a Bearer Token
    }
  })
  if (setRefresh) setRefresh((prev: boolean) => !prev)

}