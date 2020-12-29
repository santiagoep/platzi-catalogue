import styled from 'styled-components';

import heightMixin from '@mixins/height.mixin';
import centeredMixin from '@mixins/centered.mixin';
import relativeMixin from '@mixins/relative.mixin';
import widthMixin from '@mixins/container-width.mixin';

export default styled.div`
  ${relativeMixin}
  ${centeredMixin}
  ${widthMixin}
  ${heightMixin}
`;
