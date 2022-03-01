const Todo = require('../lib/todo');
const TodoList = require('../lib/todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });
  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });
  test('calling toArray returns the list in array form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });
  test('first is todo1', () => {
    expect(list.first()).toBe(todo1);
  });
  test('last is todo3', () => {
    expect(list.last()).toBe(todo3);
  });
  test('shift removes todo1',()=>{
    //let todo = list.shift();
    expect(list).not.toContain(todo1);
  });
  test('shift returns todo1', ()=>{
    expect(list.shift()).toBe(todo1);
  });
  test('pop removes todo3', () => {
    list.pop();
    expect(list).not.toContain(todo3);
  });
  test('pop returns todo3', () => {
    let todo = list.pop();
    console.log(todo)
    console.log(todo3)
    console.log(todo === todo3)
    expect(todo).toBe(todo3);
  })
  test('isDone is false', () => {
    expect(list.isDone()).not.toBeTruthy()
  });
  test('isDone is true when completed', () => {
    list.markDoneAt(2);
    expect(todo3.isDone()).toBe(true);
    //Maybe insert something
  });
  test('TypeError thrown when adding non-Todo object to TodoList', () => {
    expect(() => list.add({})).toThrow(TypeError);
  });
  test('Ref Error thrown when index with no element specified for itemAt', () => {
    expect(() => list.itemAt(999)).toThrow(ReferenceError);
  });
  test('markDoneAt throws reference error with no element specified for given index', () => {
    expect(() => list.markDoneAt(999)).toThrow(ReferenceError);
  });
  test('markDoneAt(0) causes todo1.isDone() to return true', () => {
    list.markDoneAt(0);
    expect(todo1.isDone()).toBe(true);
  });
  test('markUndoneAt(999) causes reference error', () => {
    expect(() => list.markUndoneAt(999)).toThrow(ReferenceError);
  });
  test('markUndoneAt(0) causes completed todo1.isDone() to return false', () => {
    list.markDoneAt(0);
    list.markUndoneAt(0);
    expect(todo1.isDone()).toBe(false);
  })
  test('markAllDone causes list.allDone() to return true', () => {
    list.markAllDone();
    expect(list.allDone().size() === list.size()).toBe(true);
  })
  test('list.removeAt(999) causes reference Error', () => {
    expect(() => list.removeAt(999)).toThrow(ReferenceError);
  });
  test('list.removeAt(0) removes todo1', () => {
    list.removeAt(0);
    expect(list.toArray()).not.toContain(todo1);
  })
  test('toString returns string representation of the list', () => {
  let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

  expect(list.toString()).toBe(string);
  });

  test(' sam version toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);

  });
  test('toString returns string rep of list with all done', () => {
    list.markAllDone();
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;
    expect(list.toString()).toBe(string);
  });
  test('toString returns string rep of list with todo1 done', () => {
    list.markDoneAt(0);
    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    expect(list.toString()).toBe(string);
  });
  test('for each iterates over the elements in the list', () => {
    let newLst = [];
    list.forEach(item => newLst.push(item));
    expect(list.toArray()).toEqual(newLst);
  })
  test('filter with true condition returns new todo list object that contains same stuff as original', () => {
    expect(list.filter(item => true)).toEqual(list);
    expect(list.filter(item => true)).not.toBe(list);
  })
  test('list.markDone(randomString) returns no error', () => {
    expect(() => list.markDone('sfadfdsa')).not.toThrow();
  });
  test('list.markDone("Clean room") marks it done ', () => {
    list.markDone('Clean room');
    expect(todo2.isDone()).toBe(true);
    expect(todo1.isDone()).toBe(false);
  } );
  test('expect markAllUndone to take alldone list and make it all undone', () => {
    list.markAllDone();
    list.markAllUndone();
    expect(list.allDone().size()).toBe(0);
  })
  test('expect markAllUndone to take somewhat done list and make it all undone', () => {
    list.markDoneAt(0);
    list.markAllUndone();
    expect(list.allDone().size()).toBe(0);
  })
  test('list.findByTitle("Clean room") returns todo2', () => {
    expect(list.findByTitle('Clean room')).toBe(todo2);
  })
  test('todo2.getTitle() is "Clean room"' , () => {
    expect(todo2.getTitle()).toBe('Clean room');
  });
  test('list.allNotDone() yields todolist object that is equal to the original list if og list empty', () => {
    expect(list.allNotDone()).toEqual(list);
    list.markDoneAt(0);
    expect(list.allNotDone().size()).toBe(2);
    list.markAllDone();
    expect(list.allNotDone().size()).toBe(0);
  })
  // your tests go here
});
