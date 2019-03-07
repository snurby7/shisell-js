import {assert, SinonSpy, spy} from 'sinon';
import {consoleWriter} from '../../src/internal/writers/consoleWriter';

describe('writers/consoleWriter', () => {
  let consoleSpy: SinonSpy<[any?, ...any[]]>;

  beforeEach(() => {
    consoleSpy = spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should write to console', () => {
    const model = {
      Name: 'eventName',
      ExtraData: {
        key: 'value',
      },
    };

    consoleWriter(model as any);

    assert.calledOnce(consoleSpy);
    assert.calledWithExactly(consoleSpy, JSON.stringify(model));
  });
});
