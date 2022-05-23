import React from 'react';
import { render, screen } from '@testing-library/react';
import PostsLists from './posts-list';

// TODO: Put this array into __mocks__ directory
const posts = [
    {
        id: '1',
        title: 'Post 1',
        image: '/post-1-image.jpg',
        excerpt: 'Post 1 excerpt',
    },
    {
        id: '2',
        title: 'Post 2',
        image: '/post-2-image.jpg',
        excerpt: 'Post 2 excerpt',
    },
];


describe('Render PostsLists component', () => {
    it('PostsLists renders correctly', () => {
        render(<PostsLists allPostsData={posts}/>);

        const links = screen.getAllByRole('link');

        // Test Post 1
        expect(screen.getByText('Post 1')).not.toBeNull();
        expect(screen.getByText('Post 1 excerpt')).not.toBeNull();
        expect(screen.getByAltText('Post 1 - thumbnail')).not.toBeNull();
        expect(links[0].href).toContain('/posts/1');

        // Test Post 2
        expect(screen.getByText('Post 2')).not.toBeNull();
        expect(screen.getByText('Post 2 excerpt')).not.toBeNull();
        expect(screen.getByAltText('Post 2 - thumbnail')).not.toBeNull();
        expect(links[1].href).toContain('/posts/2');
    });
})