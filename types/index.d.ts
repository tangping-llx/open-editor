declare module 'launch-editor-middlewar' {
  import { RequestOptions, ServerResponse } from 'http'
  const fn: Fn
  type Fn = (specifiedEditor: string) => (req: RequestOptions, res: ServerResponse) => void
  export default fn
}