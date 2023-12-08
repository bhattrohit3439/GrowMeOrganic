import React, { useState } from 'react';
import { Checkbox, Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandMore, ChevronRight } from '@mui/icons-material';

interface Department {
	department: string;
	sub_departments: string[];
}

const departments: Department[] = [
	{
		department: 'customer_service',
		sub_departments: ['support', 'customer_success'],
	},
	{
		department: 'design',
		sub_departments: ['graphic_design', 'product_design', 'web_design'],
	},
];

const DepartmentList: React.FC = () => {
	const [expanded, setExpanded] = useState<string[]>([]);
	const [selected, setSelected] = useState<string[]>([]);

	const handleExpand = (department: string) => {
		if (expanded.includes(department)) {
			setExpanded(expanded.filter((dep) => dep !== department));
		} else {
			setExpanded([...expanded, department]);
		}
	};

	const handleSelect = (department: string) => {
		if (selected.includes(department)) {
			setSelected(selected.filter((dep) => dep !== department));
		} else {
			setSelected([...selected, department]);
		}
	};

	const handleSelectAll = (department: string) => {
		const subDepartments = departments.find((dep) => dep.department === department)?.sub_departments || [];
		if (selected.includes(department)) {
			setSelected(selected.filter((dep) => !subDepartments.includes(dep)));
		} else {
			setSelected([...selected, department, ...subDepartments]);
		}
	};

	return (
		<List>
			{departments.map((dep) => (
				<React.Fragment key={dep.department}>
					<ListItem button onClick={() => handleExpand(dep.department)}>
						<ListItemIcon>
							{expanded.includes(dep.department) ? <ExpandMore /> : <ChevronRight />}
						</ListItemIcon>
						<ListItemText primary={dep.department} />
						<Checkbox
							checked={selected.includes(dep.department)}
							onChange={() => handleSelectAll(dep.department)}
						/>
					</ListItem>
					<Collapse in={expanded.includes(dep.department)}>
						<List disablePadding>
							{dep.sub_departments.map((subDep) => (
								<ListItem key={subDep} button>
									<ListItemIcon>
										<Checkbox
											checked={selected.includes(subDep)}
											onChange={() => handleSelect(subDep)}
										/>
									</ListItemIcon>
									<ListItemText primary={subDep} />
								</ListItem>
							))}
						</List>
					</Collapse>
				</React.Fragment>
			))}
		</List>
	);
};

export default DepartmentList;
