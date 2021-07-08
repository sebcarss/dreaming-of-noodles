jest.mock('fs');

describe("Test getSortedPostsData function", () => {

    beforeEach(() => {
        require('fs')
    })

    it ("Should get posts sorted by date descending", () => {
       const Posts = require('./posts');
       const sortedPostsData = Posts.getSortedPostsDataTest();
       expect(sortedPostsData.length).toBe(2);
    })

})