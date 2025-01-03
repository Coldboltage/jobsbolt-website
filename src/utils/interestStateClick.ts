export const interestStateClick = async (jobId: string, state: boolean, jwt: string, setRefresh?: (refresh: (prev: boolean) => boolean) => void) => {

  await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API_URL}/api/job/change-interested/${jobId}/${state}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`, // JWT as a Bearer Token
    }
  })
  if (typeof setRefresh === 'function') {
    console.log("was I fired")
    setRefresh(() => true)
  }

}