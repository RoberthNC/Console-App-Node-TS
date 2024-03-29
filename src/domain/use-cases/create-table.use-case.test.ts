import { CreateTable } from './create-table.use-case';

describe('Create Table Use Case', ()=>{

    test('should create table with default values', ()=>{
        const createTable = new CreateTable();
        const table = createTable.execute({ base: 2 });
        const rows = table.split('\n').length;        
        expect( createTable ).toBeInstanceOf(CreateTable);
        expect( table ).toContain('2 x 1 = 2');
        expect( table ).toContain('2 x 2 = 4');
        expect( rows ).toBe(10);
    });

    test('should create a table with custom values', ()=>{
        const createTable = new CreateTable();
        const options = {
            base: 3,
            limit: 20
        }
        const table = createTable.execute(options);
        const rows = table.split('\n').length;
        expect(rows).toBe(options.limit);
    });

});
