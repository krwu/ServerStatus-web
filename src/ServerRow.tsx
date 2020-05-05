/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import intl from 'react-intl-universal';
import React, { ReactNode } from 'react';
import {
  Row, Col, Tag, Progress, Tooltip, Alert,
} from 'antd';

interface RawData {
  name: string;
  type: string;
  host: string;
  location: string;
  online4: boolean;
  online6: boolean;
  uptime: string;
  load: number;
  'network_rx': number;
  'network_tx': number;
  cpu: number;
  memory_total: number;
  memory_used: number;
  'swap_total': number;
  'swap_used': number;
  'hdd_total': number;
  'hdd_used': number;
  custom?: string;
}

interface SergateData {
  servers?: Array<RawData>;
  updated?: string;
}

const resGutter = {
  xs: 8, sm: 16, md: 24, lg: 32,
};

function onlineTag(online: boolean, label: string): React.ReactElement {
  return <Tag color={online ? '#87d068' : '#f50'}>{online ? 'ON' : 'OFF'}</Tag>;
}

function transUptime(uptime: string): string {
  uptime = uptime || '';
  return uptime.replace('days', intl.get('DAYS'));
}

function networkUnit(network: number): string {
  network = network || 0;
  if (network < 1000) {
    return `${network.toFixed(0)}B`;
  } if (network < 1000 * 1000) {
    return `${(network / 1000).toFixed(0)}K`;
  }
  return `${(network / 1000 / 1000).toFixed(0)}M`;
}

function bytesToSize(bytes: number, precision: number = 1, si: number = 0) {
  const kilobyte = si === 0 ? 1024 : 1000;
  const megabyte = kilobyte * kilobyte;
  const gigabyte = megabyte * kilobyte;
  const terabyte = gigabyte * kilobyte;
  bytes = bytes || 0;
  bytes *= 1024;
  if (bytes >= 0 && bytes < kilobyte) {
    return `${bytes}B`;
  }

  if (bytes >= kilobyte && bytes < megabyte) {
    return `${(bytes / kilobyte).toFixed(precision)}K`;
  }

  if (bytes >= megabyte && bytes < gigabyte) {
    return `${(bytes / megabyte).toFixed(precision)}M`;
  }

  if (bytes >= gigabyte && bytes < terabyte) {
    return `${(bytes / gigabyte).toFixed(precision)}G`;
  }

  return `${(bytes / terabyte).toFixed(precision)}T`;
}

function memTips(props: RawData): ReactNode {
  const {
    memory_used, memory_total, swap_used, swap_total,
  } = props;
  return (
    <dl>
      <dt>Mem:</dt>
      <dd>
        {bytesToSize(memory_used)}
        /
        {bytesToSize(memory_total)}
      </dd>
      <dt>Swap:</dt>
      <dd>
        {bytesToSize(swap_used)}
        /
        {bytesToSize(swap_total)}
      </dd>
    </dl>
  );
}

function formatDateTime(time: Date) {
  const year = time.getFullYear();
  const month = (`${time.getMonth() + 1}`).padStart(2, '0');
  const day = (`${time.getDate()}`).padStart(2, '0');
  const hour = (`${time.getHours()}`).padStart(2, '0');
  const minute = (`${time.getMinutes()}`).padStart(2, '0');
  const second = (`${time.getSeconds()}`).padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

interface FlagProps {
  loc: string
}
const Flag: React.FC<FlagProps> = ({ loc }: FlagProps) => (
  <i className={`flag-icon flag-icon-${loc.toLowerCase()}`} />
);

const ServerRow: React.FC<SergateData> = (props: SergateData) => {
  let { servers, updated } = props;

  servers = servers || [];
  updated = updated || '0';
  const updatedInt = parseInt(updated, 10) * 1000;
  const updatedTime = formatDateTime(new Date(updatedInt));

  return (
    <div className="sergate">
      <Row className="sr-head" type="flex" justify="space-around" gutter={8}>
        <Col xs={3} sm={3} md={1} lg={1}>IPv4</Col>
        <Col xs={0} sm={0} md={0} lg={1}>IPv6</Col>
        <Col xs={3} sm={3} md={3} lg={2}>{intl.get('NAME')}</Col>
        <Col xs={3} sm={3} md={2} lg={2}>{intl.get('TYPE')}</Col>
        <Col xs={3} sm={2} md={2} lg={2}>{intl.get('LOC')}</Col>
        <Col xs={3} sm={4} md={3} lg={2}>{intl.get('UPTIME')}</Col>
        <Col xs={0} sm={0} md={0} lg={2}>{intl.get('LOAD')}</Col>
        <Col xs={0} sm={0} md={4} lg={3}>{intl.get('NETWORK')}</Col>
        <Col xs={3} sm={3} md={3} lg={3}>{intl.get('CPU')}</Col>
        <Col xs={3} sm={3} md={3} lg={3}>{intl.get('RAM')}</Col>
        <Col xs={3} sm={3} md={3} lg={3}>{intl.get('HDD')}</Col>
      </Row>
      {servers && servers.length > 0 ? servers.map((server) => (
        <Row key={server.host} className="sr-body" type="flex" justify="center" gutter={resGutter}>
          <Col xs={3} sm={3} md={1} lg={1}>{onlineTag(server.online4, 'IPv4')}</Col>
          <Col xs={0} sm={0} md={0} lg={1}>{onlineTag(server.online6, 'IPv6')}</Col>
          <Col xs={3} sm={3} md={3} lg={2}>{server.host || server.name}</Col>
          <Col xs={3} sm={3} md={2} lg={2}>{server.type}</Col>
          <Col xs={3} sm={2} md={2} lg={2}><Flag loc={server.location} /></Col>
          <Col xs={3} sm={4} md={3} lg={2}>{transUptime(server.uptime)}</Col>
          <Col xs={0} sm={0} md={0} lg={2}>{server.load}</Col>
          <Col xs={0} sm={0} md={4} lg={3}>
            {networkUnit(server.network_rx)}
            ↓ | ↑
            {networkUnit(server.network_tx)}
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <Progress strokeWidth={12} percent={server.cpu} status="active" />
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <Tooltip placement="left" title={memTips(server)}>
              <Progress strokeWidth={12} percent={parseFloat(((server.memory_used / server.memory_total) * 100).toFixed(1))} status="active" />
            </Tooltip>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <Tooltip placement="left" title={`${bytesToSize(server.hdd_used * 1024)}/${bytesToSize(server.hdd_total * 1024)}`}>
              <Progress strokeWidth={12} percent={parseFloat(((server.hdd_used / server.hdd_total) * 100).toFixed(1))} status="active" />
            </Tooltip>
          </Col>
        </Row>
      )) : (
        <Alert
          showIcon
          type="info"
          message={intl.get('LOADING')}
          description={intl.get('WAIT')}
        />
      )}
      {updatedInt > 0 && <Alert className="lastUpdated" type="info" message={intl.get('LAST_UPDATE', { updatedTime })} />}
    </div>
  );
};

export default ServerRow;
