export interface HeadingTokens {
  color: never;
  lineHeight: never;
  1: never;
  2: never;
  3: never;
  4: never;
  5: never;
  6: never;
}
export const heading: HeadingTokens = {
  color: { value: '{colors.font.primary.value}' },
  lineHeight: { value: '{lineHeights.small.value}' },

  1: {
    fontSize: { value: '{fontSizes.xxxxl.value}' },
    fontWeight: { value: '{fontWeights.light.value}' },
  },
  2: {
    fontSize: { value: '{fontSizes.xxxl.value}' },
    fontWeight: { value: '{fontWeights.normal.value}' },
  },
  3: {
    fontSize: { value: '{fontSizes.xxl.value}' },
    fontWeight: { value: '{fontWeights.medium.value}' },
  },
  4: {
    fontSize: { value: '{fontSizes.xl.value}' },
    fontWeight: { value: '{fontWeights.semibold.value}' },
  },
  5: {
    fontSize: { value: '{fontSizes.large.value}' },
    fontWeight: { value: '{fontWeights.bold.value}' },
  },
  6: {
    fontSize: { value: '{fontSizes.medium.value}' },
    fontWeight: { value: '{fontWeights.extrabold.value}' },
  },
};
