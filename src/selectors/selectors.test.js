import expect from 'expect';
import { authorsForDropdown } from './selector';

describe('Author Selector', () => {
    describe('authorsForDropdown', () => {
        it('Should return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 'some-author', firstName: 'James', lastName: 'Montana'},
                {id: 'j-smith', firstName: 'John', lastName: 'Smith'}
            ];
            const expected = [
                {value: 'some-author', text: 'James Montana'},
                {value: 'j-smith', text: 'John Smith'}
            ];

            expect(authorsForDropdown(authors)).toEqual(expected);
            
        });
    });
});