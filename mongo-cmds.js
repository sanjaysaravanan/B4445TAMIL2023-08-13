

// Insert
db.users.insertOne({ name: 'Sanjay', batch: 'B44WETAMIL' });

// inset Many
db.users.insertMany([{ name: 'Athi', batch: 'B4445WETAMIL' }, { name: 'Lakshmi', batch: 'B49WEENG' }]);

// Find all the books
db.books.find();

// 2. Find all the books authored by Amanda Johnson
db.books.find({ author: 'Amanda Johnson' });

// 3. Find the first the book written by Amanda Johnson
db.books.findOne({ author: 'Amanda Johnson' });

// 4. Filter all the books writen after 2010
db.books.find({ publishedYear: { $gt: 2010 } });

// 5. Filter all the books which has less than 300 pages
db.books.find({ pages: { $lt: 300 } });

// 6. Filter all the book which contains 'The' in the title
db.books.find({ title: { $regex: 'The' } });

// 7. Find all the books written btween 2000 - 2010
db.books.find({ publishedYear: { $lt: 2010, $gt: 2000 } });

// 8. Find all the books writen by Emily Adams/Daniel Brown/Sophia Martinez
db.books.find({ author: { $in: ['Emily Adams', 'Daniel Brown', 'Sophia Martinez'] } });

// 9. Find all the books not writen by Emily Adams/Daniel Brown/Sophia Martinez
db.books.find({ author: { $nin: ['Emily Adams', 'Daniel Brown', 'Sophia Martinez'] } });

// 10. Find the books expect the one with BookId 'B009'
db.books.find({ bookId: { $ne: 'B009' } });

// Projection

// 1. select only the title, author
db.books.find({}, { bookId: 1, author: 1, _id: 0 }); // _id: 0 avoid the default objectId


// 2. exclude the publishedYear, title, pages
db.books.find({}, { publishedYear: 0, title: 0, pages: 0, _id: 0 }); // _id: 0 avoid the default objectId


// Sorting

// 1. Sort the books by pages
db.books.find({}, {}, { sort: { pages: 1 } });

// 2. sort the books by desc order of Title
db.books.find({}, {}, { sort: { title: -1 } });


// Limit:
// 1. first four books
db.books.find({}, {}, { limit: 4 });

// 2. Second four books
db.books.find({}, {}, { limit: 4, skip: 4 });


// Delete a single Document
db.employess.deleteOne({ name: 'Clementina DuBuque' });

// Delete Multiple Document with ID between 4 - 8
db.employess.deleteMany({ id: { $gt: 4, $lt: 8 } });

// Update

// options --> upsert: true will insert a new document if no matching document

// update only the Phone and Website for one document
db.employess.updateOne({ id: 9 }, { $set: { phone: '1234567890', website: 'guvi.com' } });

// update many the Phone and Website
db.employess.updateMany({}, { $set: { phone: '1234567890', website: 'zenclass.com' } });

// replace one Document with new object
db.employess.replaceOne({ username: 'Delphine' }, { username: 'Sanjay', role: 'DEV' });



// joins with simple queries

// first filter and take the artistIds list from Movies
db.movies.findOne({ name: 'Leo' }, { artistIds: 1 })

// then use that to query the artists collection
db.artists.find({ id: { $in: db.movies.findOne({ name: 'Leo' }, { artistIds: 1 }).artistIds } });

