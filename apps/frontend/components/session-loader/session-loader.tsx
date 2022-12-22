import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import ReactMarkdown from "react-markdown";
import children = ReactMarkdown.propTypes.children;
import React from "react";
import {setToken} from "../../utils/http-client/axios";

/* eslint-disable-next-line */
export interface SessionLoaderProps {
  children: React.ReactNode
}

export function SessionLoader({children}: SessionLoaderProps) {
  const router = useRouter()
  const session = useSession()

  if (session.status === 'loading') {
    return <p>loading</p>
  }

  if (session.status === 'authenticated') {
    setToken(session.data.user.idToken)
  }

  if (router.pathname === '/auth/login' && session.status === 'authenticated') {
    router.push('/admin')
  }

  return <>{children}</>
}

export default SessionLoader;
