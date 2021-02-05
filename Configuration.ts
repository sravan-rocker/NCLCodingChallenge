exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true, 
    capabilities:{
        browserName:'chrome'
    },
    framework: 'jasmine',
    specs: ['./specs/Filter.spec.js'],
    jasmineNodeOpts:{
        showColors:true,
        defaultTimeoutInterval: 180000 
    }
  };