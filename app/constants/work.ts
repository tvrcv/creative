import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2019',
    title: 'Virginia Polytechnic Institute and State University',
    subtitle: 'B.S in Industrial and Systems Engineering',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2021',
    title: 'SENER',
    subtitle: 'Industrial Engineering Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2021',
    title: 'Cisco Systems',
    subtitle: 'Technical Consultant Engineer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2023',
    title: 'Oliver Wyman  Group',
    subtitle: 'Business Relationship Analyst',
    position: 'left',
  },

]