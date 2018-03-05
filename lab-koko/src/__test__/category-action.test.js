import * as actions from '../actions/category-actions';

describe('category actions', () => {
  it ('should create an action to add to a category', () => {
    let category = {title: 'hello', budget: '45'}; 
    let action = actions.categoryCreate(category);

    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload).toHaveProperty('_id');
    expect(action.payload).toHaveProperty('timestamp');
  });
  it ('should create an action to update to a category', () => {
    let category = {title: 'bye', budget: '850'}; 
    let action = actions.categoryUpdate(category);

    expect(action.type).toEqual('CATEGORY_UPDATE');
    expect(action.payload.title).toEqual('bye');
    expect(action.payload.budget).toEqual('850');  
  });

  it ('should create an action to delete a category', () => {
    let category = {title: 'bye', budget: '850'}; 
    let action = actions.categoryDelete(category);

    expect(action.type).toEqual('CATEGORY_DELETE');
    expect(action.payload.title).toBe('bye');
  });

});