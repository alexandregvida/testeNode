describe('Routes Books',() => {
	const defaultBooks = {
		id:1,
		name:'Default Books'
	};

	describe('Route GET /books', () => {
		it('should return a lisy of book', done => {

			request
				.get('/books')
                .end ((err, res) => {

                	//expect(res.body[0].id).to.be.eql(defaultBooks.id);
					//expect(res.body[0].name).to.be.eql(defaultBooks.nome);
                	
                	done(err);

				});
		});
	});
});
