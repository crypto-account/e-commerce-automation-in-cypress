const url = 'https://jsonplaceholder.typicode.com/posts';

describe('API Automation Test - JSONPlaceholder', () => {

    it('should fetch posts and return 200 status', () => {
        cy.request('GET', url).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            cy.log('Fetched posts count: ' + response.body.length);
        });
    });

    it('should create a new post and return 201 status', () => {
        const payload = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        };

        cy.request('POST', url, payload).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.title).to.eq('foo');
            cy.log('Created post ID: ' + response.body.id);
        });
    });

    it('should update an existing post and return 200 status', () => {
        const updatePayload = {
            id: 1,
            title: 'updated title',
            body: 'updated body',
            userId: 1,
        };

        cy.request('PUT', `${url}/1`, updatePayload).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq('updated title');
        });
    });

    it('should delete a post and return 200 status', () => {
        cy.request('DELETE', `${url}/1`).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});