const department: { department: string; sub_departments: string[] }[] = [
	{
		department: 'customer_service',
		sub_departments: ['support', 'customer_success'],
	},
	{
		department: 'design',
		sub_departments: ['graphic_design', 'product_design', 'web_design'],
	},
];

const Department = () => {
	return (
		<>
			<div>Department</div>
		</>
	);
};
export default Department;
