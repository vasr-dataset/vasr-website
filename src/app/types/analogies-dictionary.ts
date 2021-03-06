import {Analogy} from './analogy';
import {Candidate} from './candidate';
import {AnalogyElement} from './analogy-element';

const analogiesDictionary: Map<string,{analogy: Analogy, candidates: Candidate[]}> =
    new Map<string, {analogy: Analogy; candidates: Candidate[]}>()

const defaultAnalogy = 'monkey-human-swing'
export function getAnalogy(analogyName) {
    if (analogiesDictionary.has(analogyName)) {
        return JSON.parse(JSON.stringify(analogiesDictionary.get(analogyName)));
    }
    return JSON.parse(JSON.stringify(analogiesDictionary.get(defaultAnalogy)))
}

analogiesDictionary.set('monkey-human-swing', {
    analogy: new Analogy(new AnalogyElement('A', '/assets/img/swing-human.JPG'), new AnalogyElement('A\'', '/assets/img/swing-monkey.JPG'),
        new AnalogyElement('B', '/assets/img/freezing-human.JPG'), new AnalogyElement('B\'', '/assets/img/freezing-monkey.JPG')),
    candidates: [
        new Candidate('/assets/img/freezing-human-2.JPG','The difference between  A and A\' is agent man changed to monkey.', '1'),
        new Candidate('/assets/img/swing-monkey-2.JPG','B\' should be similar to B except of the agent.', '2'),
        new Candidate('/assets/img/freezing-monkey.JPG','Good Job!', '3', true),
        new Candidate('/assets/img/swing-human-2.JPG','The difference between  A and A\' is agent man changed to monkey.', '4')
    ]
})

analogiesDictionary.set('agent', {
    analogy: new Analogy(new AnalogyElement('A', '/assets/img/agent-analogy/a.JPG'), new AnalogyElement('A\'', '/assets/img/agent-analogy/a-tag.JPG'),
        new AnalogyElement('B', '/assets/img/agent-analogy/b.JPG'), new AnalogyElement('B\'', '/assets/img/agent-analogy/b-tag.JPG')),
    candidates: [
        new Candidate('/assets/img/agent-analogy/c1.JPG','B\' should be similar to B except of the agent.', '1'),
        new Candidate('/assets/img/agent-analogy/b-tag.JPG','Good job!', '2', true),
        new Candidate('/assets/img/agent-analogy/c3.JPG', 'The difference between  A and A\' is agent dog changed to baby.', '3'),
        new Candidate('/assets/img/agent-analogy/c4.JPG','The difference between  A and A\' is agent dog changed to baby.', '4')
    ]
});

analogiesDictionary.set('verb', {
    analogy: new Analogy(new AnalogyElement('A', '/assets/img/verb-analogy/a.JPG'), new AnalogyElement('A\'', '/assets/img/verb-analogy/a-tag.JPG'),
        new AnalogyElement('B', '/assets/img/verb-analogy/b.JPG'), new AnalogyElement('B\'', '/assets/img/verb-analogy/b-tag.JPG')),
    candidates: [
        new Candidate('/assets/img/verb-analogy/c1.JPG','The difference between  A and A\' is verb shivering changed to smiling.', '1'),
        new Candidate('/assets/img/verb-analogy/c2.JPG', 'B\' should be similar to B except of the verb.', '2'),
        new Candidate('/assets/img/verb-analogy/b-tag.JPG','Good job!', '3', true),
        new Candidate('/assets/img/verb-analogy/c4.JPG','The difference between  A and A\' is verb shivering changed to smiling.', '4')
    ]
});


analogiesDictionary.set('item', {
    analogy: new Analogy(new AnalogyElement('A', '/assets/img/item-analogy/a.JPG'), new AnalogyElement('A\'', '/assets/img/item-analogy/a-tag.JPG'),
        new AnalogyElement('B', '/assets/img/item-analogy/b.JPG'), new AnalogyElement('B\'', '/assets/img/item-analogy/b-tag.JPG')),
    candidates: [
        new Candidate('/assets/img/item-analogy/c1.JPG','B\' should be similar to B except of the item.', '1'),
        new Candidate('/assets/img/item-analogy/c2.JPG', 'The difference between  A and A\' is item truck changed to tree.', '2'),
        new Candidate('/assets/img/item-analogy/c3.JPG','The difference between  A and A\' is item truck changed to tree.', '3'),
        new Candidate('/assets/img/item-analogy/b-tag.JPG','Good job!', '4', true)
    ]
});


analogiesDictionary.set('tool', {
    analogy: new Analogy(new AnalogyElement('A', '/assets/img/tool-analogy/a.JPG'), new AnalogyElement('A\'', '/assets/img/tool-analogy/a-tag.JPG'),
        new AnalogyElement('B', '/assets/img/tool-analogy/b.JPG'), new AnalogyElement('B\'', '/assets/img/tool-analogy/b-tag.JPG')),
    candidates: [
        new Candidate('/assets/img/tool-analogy/c1.JPG','The difference between  A and A\' is tool needle changed to sewing machine.', '1'),
        new Candidate('/assets/img/tool-analogy/c2.JPG', 'B\' should be similar to B except of the tool.', '2'),
        new Candidate('/assets/img/tool-analogy/b-tag.JPG','Good job!', '3', true),
        new Candidate('/assets/img/tool-analogy/c4.JPG','B\' should be similar to B except of the tool.', '4')
    ]
});


analogiesDictionary.set('vehicle', {
    analogy: new Analogy(new AnalogyElement('A', '/assets/img/vehicle-analogy/a.JPG'), new AnalogyElement('A\'', '/assets/img/vehicle-analogy/a-tag.JPG'),
        new AnalogyElement('B', '/assets/img/vehicle-analogy/b.JPG'), new AnalogyElement('B\'', '/assets/img/vehicle-analogy/b-tag.JPG')),
    candidates: [
        new Candidate('/assets/img/vehicle-analogy/c1.JPG','B\' should be similar to B except of the vehicle.', '1'),
        new Candidate('/assets/img/vehicle-analogy/b-tag.JPG','Good job!', '2', true),
        new Candidate('/assets/img/vehicle-analogy/c3.JPG', 'The difference between  A and A\' is vehicle airplane changed to helicopter.', '3'),
        new Candidate('/assets/img/vehicle-analogy/c4.JPG','B\' should be similar to B except of the vehicle.', '4')
    ]
});


analogiesDictionary.set('food', {
    analogy: new Analogy(new AnalogyElement('A', '/assets/img/food-analogy/a.JPG'), new AnalogyElement('A\'', '/assets/img/food-analogy/a-tag.JPG'),
        new AnalogyElement('B', '/assets/img/food-analogy/b.JPG'), new AnalogyElement('B\'', '/assets/img/food-analogy/b-tag.JPG')),
    candidates: [
        new Candidate('/assets/img/food-analogy/c1.JPG','B\' should be similar to B except of the food.', '1'),
        new Candidate('/assets/img/food-analogy/c2.JPG', 'B\' should be similar to B except of the food.', '2'),
        new Candidate('/assets/img/food-analogy/b-tag.JPG','Good job!', '3', true),
        new Candidate('/assets/img/food-analogy/c4.JPG','The difference between  A and A\' is food vegetable changed to chicken.', '4')
    ]
});


analogiesDictionary.set('victim', {
    analogy: new Analogy(new AnalogyElement('A', '/assets/img/victim-analogy/a.JPG'), new AnalogyElement('A\'', '/assets/img/victim-analogy/a-tag.JPG'),
        new AnalogyElement('B', '/assets/img/victim-analogy/b.JPG'), new AnalogyElement('B\'', '/assets/img/victim-analogy/b-tag.JPG')),
    candidates: [
        new Candidate('/assets/img/victim-analogy/b-tag.JPG','Good job!', '1', true),
        new Candidate('/assets/img/victim-analogy/c2.JPG','The difference between  A and A\' is victim man changed to dog.', '2'),
        new Candidate('/assets/img/victim-analogy/c3.JPG','The difference between  A and A\' is victim man changed to dog.', '3'),
        new Candidate('/assets/img/victim-analogy/c4.JPG','B\' should be similar to B except of the victim.', '4')
    ]
});

analogiesDictionary.set('tool-2', {
    analogy: new Analogy(new AnalogyElement('A', '/assets/img/tool-analogy-2/a.JPG'), new AnalogyElement('A\'', '/assets/img/tool-analogy-2/a-tag.JPG'),
        new AnalogyElement('B', '/assets/img/tool-analogy-2/b.JPG'), new AnalogyElement('B\'', '/tool-analogy-2/b-tag.JPG')),
    candidates: [
        new Candidate('/assets/img/tool-analogy-2/c1.JPG','The difference between  A and A\' is tool tractor changed to people\'s hand.', '1'),
        new Candidate('/assets/img/tool-analogy-2/b-tag.JPG','Good job!', '2', true),
        new Candidate('/assets/img/tool-analogy-2/c3.JPG', 'B\' should be similar to B except of the tool.', '3'),
        new Candidate('/assets/img/tool-analogy-2/c4.JPG','The difference between  A and A\' is tool tractor changed to people\'s hand.', '4')
    ]
});


analogiesDictionary.set('verb-2', {
    analogy: new Analogy(new AnalogyElement('A', '/assets/img/verb-analogy-2/a.JPG'), new AnalogyElement('A\'', '/assets/img/verb-analogy-2/a-tag.JPG'),
        new AnalogyElement('B', '/assets/img/verb-analogy-2/b.JPG'), new AnalogyElement('B\'', '/assets/img/verb-analogy-2/b-tag.JPG')),
    candidates: [
        new Candidate('/assets/img/verb-analogy-2/c1.JPG','B\' should be similar to B except of the verb.', '1'),
        new Candidate('/assets/img/verb-analogy-2/c2.JPG', 'The difference between  A and A\' is verb frowning changed to whirling.', '2'),
        new Candidate('/assets/img/verb-analogy-2/c3.JPG','B\' should be similar to B except of the verb.', '3'),
        new Candidate('/assets/img/verb-analogy-2/b-tag.JPG','Good job!', '4', true),
    ]
});


analogiesDictionary.set('agent-2', {
    analogy: new Analogy(new AnalogyElement('A', '/assets/img/agent-analogy-2/a.JPG'), new AnalogyElement('A\'', '/assets/img/agent-analogy-2/a-tag.JPG'),
        new AnalogyElement('B', '/assets/img/agent-analogy-2/b.JPG'), new AnalogyElement('B\'', '/assets/img/agent-analogy-2/b-tag.JPG')),
    candidates: [
        new Candidate('/assets/img/agent-analogy-2/c1.JPG','The difference between  A and A\' is agent car changed to motorcycle.', '1'),
        new Candidate('/assets/img/agent-analogy-2/c2.JPG', 'B\' should be similar to B except of the agent.', '2'),
        new Candidate('/assets/img/agent-analogy-2/b-tag.JPG','Good job!', '3', true),
        new Candidate('/assets/img/agent-analogy-2/c4.JPG','B\' should be similar to B except of the agent.', '4')
    ]
});


analogiesDictionary.set('agent-3', {
    analogy: new Analogy(new AnalogyElement('A', '/assets/img/agent-analogy-3/a.JPG'), new AnalogyElement('A\'', '/assets/img/agent-analogy-3/a-tag.JPG'),
        new AnalogyElement('B', '/assets/img/agent-analogy-3/b.JPG'), new AnalogyElement('B\'', '/assets/img/agent-analogy-3/b-tag.JPG')),
    candidates: [
        new Candidate('/assets/img/agent-analogy-3/c1.JPG','B\' should be similar to B except of the agent.', '1'),
        new Candidate('/assets/img/agent-analogy-3/c2.JPG', 'The difference between  A and A\' is agent dog changed to man.', '2'),
        new Candidate('/assets/img/agent-analogy-3/b-tag.JPG','Good job!', '3', true),
        new Candidate('/assets/img/agent-analogy-3/c4.JPG','B\' should be similar to B except of the agent.', '4')
    ]
});


analogiesDictionary.set('item-2', {
    analogy: new Analogy(new AnalogyElement('A', '/assets/img/item-analogy-2/a.JPG'), new AnalogyElement('A\'', '/assets/img/item-analogy-2/a-tag.JPG'),
        new AnalogyElement('B', '/assets/img/item-analogy-2/b.JPG'), new AnalogyElement('B\'', '/assets/img/item-analogy-2/b-tag.JPG')),
    candidates: [
        new Candidate('/assets/img/item-analogy-2/c1.JPG','The difference between  A and A\' is item motorcycle changed to car.', '1'),
        new Candidate('/assets/img/item-analogy-2/c2.JPG', 'B\' should be similar to B except of the item.', '2'),
        new Candidate('/assets/img/item-analogy-2/b-tag.JPG','Good job!', '3', true),
        new Candidate('/assets/img/item-analogy-2/c4.JPG','B\' should be similar to B except of the item.', '4')
    ]
});


