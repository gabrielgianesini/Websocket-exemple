import { serverHttp } from './src/App'

const port = 10010

serverHttp.listen(port, () => console.log(`🚀Server is running ${port}`))
