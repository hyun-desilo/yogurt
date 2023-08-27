// 요기는 node 입니다. vanilla js X
import { getByText } from '@testing-library/dom'
import '@testing-library/jest-dom'
import { JSDOM } from 'jsdom'
import fs from 'fs'

const html = fs.readFileSync('./vanilla/index.html', 'utf8');

it('renders a heading element', () => {
  const dom = new JSDOM(html, { runScripts: 'dangerously' })
  const container = dom.window.document.body

  expect(container.querySelector('button')).not.toBeNull()
  expect(getByText(container, '클릭하세요')).toBeInTheDocument()
})
