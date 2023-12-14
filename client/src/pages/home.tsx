import {Inter} from 'next/font/google'
import {useEffect} from "react";
import {authControllerGetSessionInfo, authControllerSignIn} from "@/shared/api/generated";
import {useQuery} from "@tanstack/react-query";
import {UiButton} from "@/shared/ui/ui-button";

const inter = Inter({subsets: ['latin']})

export default function HomePage() {
  const {data} = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo()
  })

  // TODO remove console
  console.log(data, `: data`)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data?.email}
      <UiButton variant="primary">test</UiButton>
      <UiButton variant="secondary">test</UiButton>
      <UiButton variant="outlined">sign out</UiButton>
      <UiButton disabled variant="outlined">sign out</UiButton>
    </main>
  )
}
