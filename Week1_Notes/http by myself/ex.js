function printURLParts(urlString) {
    const urlObj = new URL(urlString)
    console.log(`protocol: ${urlObj.protocol}`)// a protocol is required 
    console.log(`username: ${urlObj.username}`)//username and password are optional
    console.log(`password: ${urlObj.password}`)
    console.log(`hostname: ${urlObj.hostname}`)//hostname or domainname is required
    console.log(`port: ${urlObj.port}`)//default port for the protocol is used if port is not provided
    console.log(`pathname: ${urlObj.pathname}`)//default path is used if not provided
    console.log(`search: ${urlObj.search}`) // a query is optional
    console.log(`hash: ${urlObj.hash}`)// a hash or fragment is optional
  
  
  }
  
  // don't touch below this line
  
  const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id'
  printURLParts(fantasyQuestURL)
  