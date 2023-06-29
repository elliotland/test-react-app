'use client'
import { useState } from "react";
import { MergeValueProps } from '@/interfaces/userInputs';
import ButtonTest from '@/components/ButtonTest';
import Navbar from '@/components/Navbar';
import Container from '@/components/Container';
import Grid from '@/components/Grid';
import Column from '@/components/Column';
import 'semantic-ui-css/semantic.min.css'
import '@/public/stylesheets/styles.css'


export default function Page() {
  const [input, setInput] = useState("");
  const [columnCount, setcolumnCount] = useState("");
  const handleInputChange = (event) => setInput(event.target.value);

  return (
    <div className="ui fluid container">
      <Navbar />
      <Container>
        <Grid className="three">
          <Column>
          </Column>
          <Column>
            <input type="text" value={input} onChange={handleInputChange} />
            <h1>Hello, <MergeValue name={input} /></h1>
          </Column>
          <Column>
            <ButtonTest />
          </Column>
        </Grid>
      </Container>
    </div>
  )
}

const MergeValue = ({ name }: MergeValueProps) => {
  return (
    <span>{name}</span>
  )
};