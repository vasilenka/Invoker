import styles from './Sandbox.module.scss';
import React, { useState } from 'react';
import classnames from 'classnames';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Divider from './../../docs/Divider/Divider';

import Text from './../../components/Text/Text';
import Combobox from './../../components/Combobox/Combobox';
import SinglePreview from './../../components/SinglePreview/SinglePreview';

import Luna from '../../components/Luna/Luna';
import Button from './../../components/Button/Button';

import Tabs from './../../components/Tabs/Tabs';
import TabPanels from './../../components/TabPanels/TabPanels';
import TabPanel from './../../components/TabPanel/TabPanel';
import TabList from './../../components/TabList/TabList';
import Tab from './../../components/Tab/Tab';
import Card from './../../components/Card/Card';

import Bouncer from './../../components/Bouncer/Bouncer';
import Spinner from './../../components/Spinner/Spinner';

import Draft from './../../components/Draft/Draft';
import Dropdown from './../../components/Dropdown/Dropdown';

import Banner from './../../components/Banner/Banner';
import Toast from './../../components/Toast/Toast';

// import CheckboxList from './../../components/CheckboxList/CheckboxList'
import Checkbox from './../../components/Checkbox/Checkbox';
import Checkmark from './../../components/Checkmark/Checkmark';
import CheckLabel from '../../components/CheckLabel/CheckLabel';

let options = [
  {
    label: 'Nurul Reza',
    value: 'eza@gmail.com'
  },
  {
    label: 'Madams team',
    value: [
      {
        label: 'Ongki Herlambang',
        value: 'ongkiherlambang@gmail.com'
      },
      {
        label: 'Khairani Ummah',
        value: 'khairani.u@gmail.com'
      },
      {
        label: 'Hanifan Mohamad',
        value: 'hanifan@gmail.com'
      }
    ]
  }
];

const DataTab = props => {
  return (
    <Tabs className={styles.sideTab}>
      <TabPanels className={styles.tabPanels}>
        <div>
          <TabPanel>
            <Text heading4 component="h4">
              Tab Panel
            </Text>
            <Text small component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              soluta dicta cupiditate numquam pariatur quae, eum ducimus harum
              voluptates? Cumque?
            </Text>
          </TabPanel>
        </div>
        <TabPanel>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, enim.
        </TabPanel>
        <TabPanel>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ab
          ipsam totam labore sit magni voluptate optio nihil quibusdam eaque,
          voluptates accusamus facere corporis ad eveniet molestiae architecto
          alias similique quos dignissimos nam provident voluptatem minima?
          Sapiente iure est soluta.
        </TabPanel>
        <TabPanel>Momooollaanndddssss</TabPanel>
      </TabPanels>
      <TabList className={styles.tabList}>
        <Tab className={classnames(styles.special, styles.tab)}>
          Hello world
        </Tab>
        <Tab className={styles.tab} isDisabled>
          My name is SlimShady
        </Tab>
        <Tab className={styles.tab}>Masbul and kucing</Tab>
        <Tab className={styles.tab}>syalalaa</Tab>
      </TabList>
    </Tabs>
  );
};

const Sandbox = ({ className, ...restProps }) => {
  let [banner, setBanner] = useState(false);
  let [toast, setToast] = useState(false);

  return (
    <React.Fragment>
      <Header title="Sandbox" description="Experimental components" />
      <Subheader
        title="Tab"
        description="Tabs may be used to group between multiple selections."
      />
      <DataTab />
      <Subheader
        title="Card"
        description="The Card component is meant to highlight content in grids. It visually shows that items belong together and highlights the items on hover."
      />
      <Preview>
        <Card medium>
          <Text heading3 component="h2">
            A card component helps you guys
          </Text>
          <Text component="p" medium>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            ratione molestiae mollitia iusto ducimus nam esse, explicabo nulla
            est debitis, tenetur consectetur porro fugiat placeat? Sapiente quae
            nisi nihil quas animi! Quibusdam expedita at a aperiam. A molestiae
            ab amet!
          </Text>
        </Card>
      </Preview>
      <Divider large />
      <Subheader title="Image Uploader" />
      <Preview>
        <Luna multiple>
          {state => {
            return (
              <React.Fragment>
                {state.files.length > 0 && (
                  <header style={{ marginBottom: '16px' }}>
                    <Text heading3 component="h3">
                      Preview image
                    </Text>
                  </header>
                )}
                <div className="row">
                  {state.files.length > 0 &&
                    state.files.map((file, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => state.deleteImage(index)}
                          className={classnames(
                            'col-sm-4',
                            styles.imagePreview
                          )}
                        >
                          <SinglePreview src={file.url} alt={file.file.name} />
                        </div>
                      );
                    })}
                </div>
                <Button primary small onClick={state.onClick}>
                  Browse files
                </Button>
              </React.Fragment>
            );
          }}
        </Luna>
      </Preview>
      <Divider large />
      <Subheader title="Combobox" />
      <Preview>
        <Combobox
          id="user"
          isOpen
          label="Choose your pokemon"
          secondaryLabel="Choose a water type pokemon"
          tertiaryLabel={<Text link>help?</Text>}
          options={options}
        />
      </Preview>
      <Divider large />
      <Preview>
        <div style={{ height: '200px', width: '100%', position: 'relative' }}>
          <Spinner />
        </div>
      </Preview>
      <Preview>
        <div style={{ height: '200px', width: '100%', position: 'relative' }}>
          <Bouncer />
        </div>
      </Preview>
      <Divider large />
      {/* <Preview>
        <Draft />
      </Preview> */}
      <Divider large />
      <Preview>
        <Dropdown withArrow options={options} />
      </Preview>
      <Divider large />
      <Preview>
        {banner && (
          <Banner tone="positive" className={styles.bannerPosition}>
            Whoops! Looks like you are having trouble loading the page.{' '}
            <Text component="a" link>
              Reload the page
            </Text>
          </Banner>
        )}
        <Button small primary onClick={() => setBanner(!banner)}>
          Toggle Banner
        </Button>
      </Preview>
      <Divider large />
      <Preview>
        {toast && (
          <Toast className={styles.ToastPosition}>
            <Text heading3 component="h4" style={{ fontWeight: '700' }}>
              Whoops!
            </Text>
            <Text medium>
              Looks like you are having trouble loading the page.
            </Text>
          </Toast>
        )}
        <Button small secondary onClick={() => setToast(!toast)}>
          Toggle Toast
        </Button>
      </Preview>
      <Divider large />
      <Preview>
        <Checkbox name="something[0]" id="hello" isChecked isDisabled>
          <Checkmark className={styles.checkmark} />
          <CheckLabel
            className={styles.checklabel}
            label="First checkbox label"
          />
        </Checkbox>

        <Checkbox name="something[1]" id="hello">
          <Checkmark large className={styles.checkmark} />
          <CheckLabel
            className={styles.checklabel}
            label="Second checkbox label"
          />
        </Checkbox>

        <Checkbox name="something[2]" id="hello">
          <Checkmark large className={styles.checkmark} />
          <CheckLabel
            className={styles.checklabel}
            label="Third checkbox label"
          />
        </Checkbox>
      </Preview>
      <Divider large />
    </React.Fragment>
  );
};

export default Sandbox;