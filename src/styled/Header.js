import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'

/**
 * This is something I would consider putting into styled/Grids,
 * however it's specific enough that we won't be using it anywhere
 * else so fine to sit in here (imo)
 */
const headerGridStyles = css`
  width: 100%;
  display: grid;
  grid-template-areas: 'section profile'
                       'company add'
                       'bottom bottom';
  grid-template-rows: 2em 1fr 3em;
  grid-template-columns: 1fr 200px;
  background-color: rgb(13, 107, 138);
  padding: 1em 10em 0 10em;
`

const HeaderGrid = styled.nav`
  ${headerGridStyles};
`

const SectionContainer = styled.div`
  grid-area: section;
`

/**
 * The active prop on RR@3.x.x NavLink seems to be broken in almost all situations..
 * fakeActive is a quick (static) hack just for the sake of the assignment!
 * this is also the source of the error in console.
 */
const Section = styled(Link)`
  font-family: Theinhardt-Bold;
  font-size: 1rem;
  text-transform: uppercase;
  grid-area: section;
  text-decoration: none;
  margin-right: 2em;

  ${props => props.fakeActive ? 'color: #FFFFFF' : 'color: rgb(129, 180, 196)'};

  :hover {
    color: #FFFFFF;
  }
`

const ProfileContainer = styled.div`
  grid-area: profile;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  >svg {
    margin-right: 1em;
  }
`

const CompanyContainer = styled.div`
  grid-area: company;
  display: flex;
  align-items: baseline;
`

const CompanyName = styled.h2`
  font-family: Theinhardt-Bold;
  font-size: 2.25rem;
  margin: .35em .25em .2em 0;
  color: #FFFFFF;
`

const AddContainer = styled.div`
  grid-area: add;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const TabContainer = styled.div`
  grid-area: bottom;
  background-color: rgb(11, 97, 128);
  margin: 0 -10em;
  padding: 0 10em;
  display: flex;
  flex-direction: row;
`

/**
 * The active prop on RR@3.x.x NavLink seems to be broken in almost all situations..
 * fakeActive is a quick (static) hack just for the sake of the assignment!
 * this is also the source of the error in console.
 */
const Tab = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-family: Theinhardt-Bold;
  cursor: pointer;
  margin-right: 2em;
  position: relative;

  ${props => props.fakeActive ? 'color: #FFFFFF' : 'color: rgb(129, 180, 196)'};
  ${props => props.fakeActive ? `
    ::after {
      display: block;
      content: '';
      height: 5px;
      width: 100%;
      background-color: rgb(250, 55, 103);
      position: absolute;
      bottom: 0;
    }
  ` : null};

  :hover {
    color: #FFFFFF;
  }

  >svg {
    margin-right: .2em;
  }
`

export default HeaderGrid

export {
  SectionContainer,
  Section,
  ProfileContainer,
  CompanyContainer,
  CompanyName,
  AddContainer,
  TabContainer,
  Tab,
}
