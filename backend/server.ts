import { serverHttp, port } from './src/App'

import './src/socket'

serverHttp.listen(port, () => console.log(`🚀App running on port: ${port}`))


