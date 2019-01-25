import React from 'react'
import { withRouter } from 'react-router-dom'

import HeaderGrid,
{
  SectionContainer,
  Section,
  ProfileContainer,
  CompanyContainer,
  CompanyName,
  AddContainer,
  TabContainer,
  Tab,
} from 'Styled/Header'
import {
  NotificationIcon,
  CaretDownIcon,
  AddUserIcon,
  HomeIcon,
  MediaIcon,
  ProgressIcon,
  CustomBPIcon,
} from 'Styled/Icons'
import AvatarBox from 'Styled/Avatar'
import { OutlineButton } from 'Styled/Buttons'

/**
 * Fairly close recreation of the Blueprint Header.
 * Some assumptions were made.
 */

const Header = () => (
  <HeaderGrid>
    <SectionContainer>
      <Section fakeActive to="/library">Blueprints</Section>
      <Section to="/settings">Settings</Section>
    </SectionContainer>
    <ProfileContainer>
      <NotificationIcon />
      <AvatarBox>E</AvatarBox>
    </ProfileContainer>
    <CompanyContainer>
      <CompanyName>Good Pet</CompanyName>
      <CaretDownIcon />
    </CompanyContainer>
    <AddContainer>
      <OutlineButton>
        <AddUserIcon style={{ fill: '#FFFFFF' }} />
        Add People
      </OutlineButton>
    </AddContainer>
    <TabContainer>
      <Tab fakeActive>
        <HomeIcon style={{ fill: '#FFFFFF' }} />
        Library
      </Tab>
      <Tab>
        <ProgressIcon />
        Progress
      </Tab>
      <Tab>
        <MediaIcon />
        Media
      </Tab>
      <Tab>
        <CustomBPIcon />
        Custom Blueprint
      </Tab>
    </TabContainer>
  </HeaderGrid>
)

export default withRouter(Header)
