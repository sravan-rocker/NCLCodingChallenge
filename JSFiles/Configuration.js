"use strict";
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'jasmine',
    specs: ['./specs/Filter.spec.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 180000
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDYixrREFBa0Q7SUFDbEQsYUFBYSxFQUFDLElBQUk7SUFDbEIsWUFBWSxFQUFDO1FBQ1QsV0FBVyxFQUFDLFFBQVE7S0FDdkI7SUFDRCxTQUFTLEVBQUUsU0FBUztJQUNwQixLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztJQUNqQyxlQUFlLEVBQUM7UUFDWixVQUFVLEVBQUMsSUFBSTtRQUNmLHNCQUFzQixFQUFFLE1BQU07S0FDakM7Q0FDRixDQUFDIn0=