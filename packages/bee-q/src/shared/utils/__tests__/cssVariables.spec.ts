import { getColorCSSVariable, getCSSVariableValue } from '..';

describe('cssVariables', () => {
  describe('cssVariables - getColorCSSVariable', () => {
    it('should return the correct CSS Custom Property string', () => {
      const token = 'ui--primary';
      const result = `var(--bq-${token})`;

      expect(getColorCSSVariable(token)).toEqual(result);
    });
  });

  describe('cssVariables - getCSSVariableValue', () => {
    beforeEach(() => {
      jest.spyOn(global, 'getComputedStyle').mockImplementationOnce(
        () =>
          ({
            getPropertyValue: (property) => {
              if (property === '--size') {
                return '20px';
              }
              return '';
            },
          } as unknown as CSSStyleDeclaration),
      );
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should return the correct CSS Custom Property string', () => {
      const element = document.createElement('div');
      const variable = 'size';
      const result = '20px';

      expect(getCSSVariableValue(variable, element)).toEqual(result);
    });
  });
});
