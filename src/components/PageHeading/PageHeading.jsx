import styled from './PageHeading.module.css'

export default function PageHeading({ text }) {
  return <h1 className={styled.title}>{text}</h1>
}
