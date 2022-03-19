function quickSort(list) {

    if (list.length < 2) 
      return list;

    let pivot = list[0];
    let left  = []; 
    let right = [];

    for (let i = 1; i < list.length; i++){
        // Compare names by alphabetical order
      if (list[i].product_name < pivot.product_name)
        left.push(list[i]);
      else
        right.push(list[i]);
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];

  };

module.exports = quickSort;
