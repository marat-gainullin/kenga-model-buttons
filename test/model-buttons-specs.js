/* global expect */
/* global NaN, Promise */
import '../src/layout.css';
import '../src/theme.css';

import Id from 'septima-utils/id';
import Invoke from 'septima-utils/invoke';
import Model from 'septima-model/model';
import Entity from 'septima-model/entity';
import Color from 'kenga/color';
import ModelCheckBox from '../src/model-check-box';
import ModelRadioButton from '../src/model-radio-button';
import ModelToggleButton from '../src/model-toggle-button';

describe('Model buttons Api', () => {

    const house1 = {name: 'Angelville'};
    const house2 = {name: 'Enville'};

    function fill(entity) {
        entity.push(
            {
                id: Id.next(),
                name: 'Joe',
                legs: 2,
                hungry: false,
                birth: new Date(),
                color: new Color('#fcfcfc'),
                house: house1
            },
            {
                id: Id.next(),
                name: 'Jane',
                legs: 2,
                hungry: false,
                birth: new Date(),
                color: new Color('#fafafa'),
                house: house1
            },
            {
                id: Id.next(),
                name: 'Nick',
                legs: 2,
                hungry: false,
                birth: new Date(),
                color: new Color('#fbfbfb'),
                house: house1
            },
            {
                id: Id.next(),
                name: 'Jack',
                legs: 2,
                hungry: false,
                birth: new Date(),
                color: new Color('#acacac'),
                house: house1
            },
            {
                id: Id.next(),
                name: 'Gala',
                legs: 2,
                hungry: false,
                birth: new Date(),
                color: new Color('#aaaaaa'),
                house: house1
            },
            {
                id: Id.next(),
                name: 'Nikolai',
                legs: 2,
                hungry: false,
                birth: new Date(),
                color: new Color('#ababab'),
                house: house1
            },
            {
                id: Id.next(),
                name: 'Shusha',
                legs: 4,
                hungry: false,
                birth: new Date(),
                color: new Color('#acacac'),
                house: house1
            }
        );
        expect(entity.cursor).toBe(entity[6]);
    }

    function expectPathReverseBinding(instance, propertyName) {
        const model = new Model();
        const entity = new Entity(model, 'dummy', 'dummy_id');
        const entityData = entity.wrapData([]);
        fill(entityData, Id, Color);
        expect(instance.value).toBeNull();
        instance.data = entityData;
        instance.field = `cursor.${propertyName}`;

        if (propertyName === 'name')
            entityData[6][propertyName] += ' 1';
        else if (propertyName === 'legs')
            entityData[6][propertyName] += 1;
        else if (propertyName === 'birth')
            entityData[6][propertyName] = new Date();
        else if (propertyName === 'hungry')
            entityData[6][propertyName] = !entityData[6][propertyName];
        else if (propertyName === 'color')
            entityData[6][propertyName] = new Color('#0c0c0c');
        else if (propertyName === 'house')
            entityData[6][propertyName] = house2;
        else
            throw `Unknown property '${propertyName}'`;
        expect(instance.value).toBe(entityData[6][propertyName]);

        entityData.cursor = entityData[0];
        expect(instance.value).toBe(entityData[0][propertyName]);

        entityData.cursor = entityData[5];
        expect(instance.value).toBe(entityData[5][propertyName]);

        entityData.cursor = entityData[6];
        expect(instance.value).toBe(entityData[6][propertyName]);

        entityData.cursor = null;
        expect(instance.value).toBeNull();

        entityData.cursor = entityData[2];
        expect(instance.value).toBe(entityData[2][propertyName]);

        entityData.cursor = undefined;
        expect(instance.value).toBeNull();
    }

    function expectPlainReverseBinding(instance, propertyName) {
        const model = new Model();
        const entity = new Entity(model, 'dummy', 'dummy_id');
        const entityData = entity.wrapData([]);
        fill(entityData, Id, Color);

        expect(instance.value).toBeNull();
        instance.data = entityData.cursor;
        instance.field = propertyName;

        expect(entityData.cursor).toBe(entityData[6]);
        if (propertyName === 'name')
            entityData[6][propertyName] += ' 1';
        else if (propertyName === 'legs')
            entityData[6][propertyName] += 1;
        else if (propertyName === 'birth')
            entityData[6][propertyName] = new Date();
        else if (propertyName === 'hungry')
            entityData[6][propertyName] = !entityData[6][propertyName];
        else if (propertyName === 'color')
            entityData[6][propertyName] = new Color('#0c0c0c');
        else if (propertyName === 'house')
            entityData[6][propertyName] = house2;
        else
            throw `Unknown property '${propertyName}'`;
        expect(instance.value).toBe(entityData[6][propertyName]);
    }

    function expectPathForwardBinding(instance, propertyName) {
        const model = new Model();
        const entity = new Entity(model, 'dummy', 'dummy_id');
        const entityData = entity.wrapData([]);
        fill(entityData, Id, Color);

        expect(instance.value).toBeNull();
        instance.data = entityData;
        instance.field = `cursor.${propertyName}`;

        if (propertyName === 'name')
            instance.value += ' 1';
        else if (propertyName === 'legs')
            instance.value += 1;
        else if (propertyName === 'birth')
            instance.value = new Date();
        else if (propertyName === 'hungry')
            instance.value = !instance.value;
        else if (propertyName === 'color')
            instance.value = new Color('#0c0c0c');
        else if (propertyName === 'house')
            instance.value = house2;
        else
            throw `Unknown property '${propertyName}'`;
        return new Promise((resolve) => {
            Invoke.later(() => {
                expect(entityData[6][propertyName]).toBe(instance.value);
                resolve();
            });
        });
    }

    function expectPlainForwardBinding(instance, propertyName) {
        const model = new Model();
        const entity = new Entity(model, 'dummy', 'dummy_id');
        const entityData = entity.wrapData([]);
        fill(entityData, Id, Color);

        expect(instance.value).toBeNull();
        instance.data = entityData.cursor;
        instance.field = propertyName;

        if (propertyName === 'name')
            instance.value += ' 1';
        else if (propertyName === 'legs')
            instance.value += 1;
        else if (propertyName === 'birth')
            instance.value = new Date();
        else if (propertyName === 'hungry')
            instance.value = !instance.value;
        else if (propertyName === 'color')
            instance.value = new Color('#0c0c0c');
        else if (propertyName === 'house')
            instance.value = house2;
        else
            throw `Unknown property '${propertyName}'`;
        return new Promise((resolve) => {
            Invoke.later(() => {
                expect(entityData[6][propertyName]).toBe(instance.value);
                resolve();
            });
        });
    }

    it('ModelCheckBox.Structure', done => {
        const properyName = 'hungry';
        expectPathReverseBinding(new ModelCheckBox(), properyName);
        expectPlainReverseBinding(new ModelCheckBox(), properyName);

        expectPathForwardBinding(new ModelCheckBox(), properyName)
            .then(() => {
                return expectPlainForwardBinding(new ModelCheckBox(), properyName);
            })
            .then(done)
            .catch(done.fail);
    });
    it('ModelRadioButton.Structure', done => {
        const properyName = 'hungry';
        expectPathReverseBinding(new ModelRadioButton(), properyName);
        expectPlainReverseBinding(new ModelRadioButton(), properyName);

        expectPathForwardBinding(new ModelRadioButton(), properyName)
            .then(() => {
                return expectPlainForwardBinding(new ModelRadioButton(), properyName);
            })
            .then(done)
            .catch(done.fail);
    });
    it('ModelToggleButton.Structure', done => {
        const properyName = 'hungry';
        expectPathReverseBinding(new ModelToggleButton(), properyName);
        expectPlainReverseBinding(new ModelToggleButton(), properyName);

        expectPathForwardBinding(new ModelToggleButton(), properyName)
            .then(() => {
                return expectPlainForwardBinding(new ModelToggleButton(), properyName);
            })
            .then(done)
            .catch(done.fail);
    });
});
