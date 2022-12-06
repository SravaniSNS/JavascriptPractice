//JAVASCRIPT ARRAY METHODS

  //Here we are going to look into all the different array methods javascript has to offer
        let a = [1,2,3,4,5];

    //1. array.length-> returns the length of the array
        n = a.length;
        console.log(n)//5

    //2. array.at(n) -> returns the element of the array at the index 'n' which is the paramenter

        console.log(a.at(2)); //3

    //3. array.concat(someValue) -> add the parameter to the array

        a.concat(6);
        console.log(a)// [1,2,3,4,5,6]

    //4. array.constructor(values) -> creates an array with the parameters as the values
        // The constructor property returns the function that created the Array prototype.
        console.log(a.constructor); //function Array() { [native code] }


    //5. array.copyWithin(target), array.copyWithin(target, start), array.copyWithin(target, start, end)
        //if u want to copy one element of an array to the position of another element of the array then
        // -> a.copyWithin(targetIndex, startIndex, endIndex), where the end index is the next index
        //if u want to copy elements from a certain index to another index, then array.copyWithin(targetIndex, startIndex)
        console.log(a.copyWithin(0,3)); //[4,5,3,4,5]
        a = [1,2,3,4,5];
        console.log(a.copyWithin(0,3,4)); // [4,2,3,4,5]

    //6. array.entries() -> returns a new Array Iterator object that contains the key/value pairs for each index in the array
        let b = array.entries();
        console.log(b.next().value);

    //next() -> a method that returns an object with two properties 'done' and 'value'


    //7. array.every() -> tests whether all elements in the array
        //pass the test implemented by the provided functions
        //returns a boolean function

        let aboveThreshold = (value) => value > 0;
        console.log(a.every(aboveThreshold)); //true

        let belowThreshold = (value) => value < 3;
        console.log(a.every(belowThreshold)); // false


    //8. array.fill() -> changes all elements in an array to a static value, from a start index to an end index. 
        //it returns a modified array

        //fill with 0 from position 2 until position 4
        console.log(a.fill(0,2,4)); // [1,2,0,0,5]

        //fill with 5 from postition 1
        console.log(a.fill(5,1)); //[1,5,5,5,5]


    //9. array.filter() -> creates a shallow copy of a portion of a given array, filtered doen to just the elemts 
        //from the given array that pass the test implemented by the given function

        let aboveThree = (value) => value > 3;
        console.log(a.filter(aboveThree))//[4,5]
        console.log(a.filter(num => num < 3)); //[1,2]

    //10. array.find() => returns the first element in the provided array that satisfies the provided testing function

        console.log(a.find(num => num >  1)); //2

    //11. array.findIndex() -> returns the index og the first element in an array that satisfies the provided testing function

        console.log(a.findIndex(num => num>2)); //2

    //12. array.findLast() -> returns the last element in the provided array that satisfies the provided testing function

        console.log(a.findLast(num => num > 3));//5

    //13. array.findLastIndex() -> returns the last index of the element in the provided array that satisfies the provided testing function

        console.log(a.findLastIndex(num => num>3));//4

    //14. array.flat() -> creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
        //converts 2d or 3d arrays to 1d less

        let c = [[1,2], [3,4], 5];
        console.log(c.flat())//[1,2,3,4,5]

        let d = [[1,2[3]],4];
        console.log(d.flat())//[1,2,[3],4]

    //15. array.flatMap() -> returns a new array formed by applying a given callback function to each element of 
        //the array and then flattening the result by one level

        let e = [[1,2],[3,4],5];
        console.log(b.flatMap(num => num));//[1,2,3,4,5]

    //16. array.forEach() -> executes a provided function for each array element
        console.log(a.forEach(num => console.log(n)));

    // 17. array.hasOwnProperty -> since array is also considered as an object, we can use this property to check
    //      if a particular index exists in the array

        console.log(a.hasOwnProperty(5))//false
        console.log(a.hasOwnProperty(4))//true

    //18. array.includes() -> determines whether an array includes a certain value among its entries, returning true or false

        console.log(a.includes(2));//true

    //19. array.indexOf() -> returns the first index at which a given element can be found in the array

        console.log(a.indexOf(3)); //2

    //20. isprototype of -> checks if an object exists in another object's prototype chain


    //21. array.join() -> creates and returns a new string concatenating all of the elements in an array 
    //....separated by commas or a specified separator string
        console.log(a.join(''));//'12345'

    //22. array.keys() -> returns a new array iterator object that contains the keys for each index in the array

        for(const key of a.keys()){
            console.log(key)
        }//0
        //1
        //2
        //3
        //4

        //returns the index values of each key


    //23. array.lastIndexOf() -> returns the last index at which a given element can be found in the array.
    //.... the array is searched backwards.
        let f = [2,3,4,2,3];
        b.lastIndexOf(2); //3

    //24. array.map -> creates a new array for every array element

        a.map(num => num*2); //[2,4,6,8,10]

    //25. array/pop() -> removes the last element from an array and returns that element.

        console.log(a.pop()); //5
        console.log(a);//[1,2,3,4]

    //25. array.propertyIsEnumerable returns a boolean indicating whether the specified property is the object's enumerable own property
        a.propertyIsEnumerable(); //false

    //26. array.push() -> adds one or more elements to the end of an array and returns the new length of the array

        a.push(6); //6
        a.push(8); //7

    //27. array.reduce() -> this method executes a user-supplied "reducer" callback function on each element of the array, 
    //....in order, passing in the return value from the calculation on the preceding element.
    //.... The final result of eunning the redicer across all elements of the array is a single value.

        const initialValue = 0;
        const sum = a.reduce((num, s) => num + s, initialValue);
        console.log(sum);

        //NEED MORE ASSISTANCE

        function myFunc(total, num){
            return total - num;
        }
        let no = a.reduce(myFunc);
        console.log(no);


    //28. array.reduceRight() -> applies a function against an accumulator and each value of the array(from right to left) 
    //....to reduce it to a single value

        function myFun(total, num){
            return total - num;
        }

        let sub = a.reduceRight(myFun);
        console.log(sub); 

        //-13


    //29. array.reverse() -> reverses an array in place and returns the reference to the same array

        a.reverse() // [8,6,5,4,3,2,1]

    //30. array.shift() -> removes the first element from an array and returns that removed element

        a.shift(); //8


    //31. array.slice() -> returns a shallow copy of a portion of an array into a new array object selected from start to end , 
    //....where the end is not included
        //the original array wont be modified

        a.slice(2); // [4,3,2,1]
        a.slice(2,4); //[4,3]
        a.slice(6,0); // []
        a.slice(-2); // [2,1]
        a.slice(-3,-1); // [3,2]
        a.slice(); //[6,5,4,3,2,1]


    //32. array.some() -> tests if atleast one element in the array passes the test implemented by the provided function.

        a.some(belowThreshold);
        //true

    //33. array.sort() -> sorts the elements of an array inplace and returns the reference to the same array, now sorted.
        // the default sort is ascending

        a.sort(); // [1,2,3,4,5,6]


    //34. array.splice() -> changes the contents of an array by removing or replacing existing elements and/or adding new elements 
    //....in place.

        a.splice(6,0,7) // []
        a //[1,2,3,4,5,6,7]

        a.splice(1,1,3); //[2]
        a // [1,3,3,4,5,6,7]

        a.splice(1,1,2);//[3]
        a // [1,2,3,4,5,6,7]

        a.splice(1,2,4); //[2,3]
        a //[1,4,4,5,6,7]

        a.splice(1,1,[2,3]); //[4]

        a // [1,[2,3],4,5,6,7]

    //35. array.toLocaleString() -> returns a string representing the elements of the array
        //the elements are converted to strings using their toLocaleString methods and these strings are separated by a 
        //....locale specific string like a comma

        // CHECK THIS
        //this function will format  the variable based on locale setting of geography


    a.toLocaleString();//'1,2,3,4,5,6,7'




    //36. array.toString() -> returns a string representing the specified array and its elements

        a.toString();//'1,2,3,4,5,6,7'
        //treats empty slots the same as undefined and produces an extra separator
        //works on non array objects



    //37. array.unshift() -> adds one or more elements to the beginning of an array and returns the new length of the array

        a.unshift(0);//8
        a //[0,1,2,3,4,5,6,7,8]


    //38. array.valueOf() -> returns the array itself

        a.valueOf() //[0,1,2,3,4,5,6,7,8]

    //39. array.values -> returns the new array iterator object that iterates the value of each index in the array

        for(let num of a.values()){
            console.log(num);
        }
        //0
        //1
        //2
        //3
        //4
        //5
        //6
        //7







