// 1. Find the maximum mark scored by any student
// ans: 99

db.students.aggregate([
  {
    $group: {
      _id: 'Max Mark',
      maxMark: {
        $max: '$mark'
      }
    }
  }
]);


// find the minimum mark scored by any student
// 66

db.students.aggregate([
  {
    $group: {
      _id: 'Min Mark',
      minMark: {
        $min: '$mark'
      }
    }
  }
]);


// find the avg marks scrored all records

db.students.aggregate([
  {
    $group: {
      _id: 'Avg Mark',
      avgMark: {
        $avg: '$mark'
      }
    }
  }
]);

// find the sum of the records

db.students.aggregate([
  {
    $group: {
      _id: 'Sum of all Marks',
      sumMark: {
        $sum: '$mark'
      }
    }
  }
]);


// Group By

// find the total marks for each student

db.students.aggregate([
  {
    $group: {
      _id: '$name',
      totalMark: {
        $sum: '$mark'
      }
    }
  }
]);

// find the avg/percentage of each student
db.students.aggregate([
  {
    $group: {
      _id: '$name',
      percentMark: {
        $avg: '$mark'
      }
    }
  }
]);


// Project with Aggregation
db.students.aggregate([
  {
    $group: {
      _id: '$name',
      percentMark: {
        $avg: '$mark'
      }
    }
  },
  {
    $project: {
      _id: 0,
      name: '$_id',
      percentMark: 1
    }
  }
]);


// matches or filter stage
db.students.aggregate([
  {
    $match: {
      name: 'Sanjay',
    }
  },
  {
    $group: {
      _id: '$name',
      percentMark: {
        $avg: '$mark'
      }
    }
  },
  {
    $project: {
      _id: 0,
      name: '$_id',
      percentMark: 1
    }
  }
]);

