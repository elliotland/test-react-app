import { Metadata } from 'next'
import { Html, Head, Main, NextScript } from 'next/document'

import 'semantic-ui-css/semantic.min.css'
import '@/public/stylesheets/styles.css'

export const metadata: Metadata = {
  title: 'Test'
}

export default function TestPage () {
  return (
<h1>test</h1>
  )
}

