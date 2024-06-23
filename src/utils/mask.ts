export const phoneMask = (phone: any) => {
  let maskPhone = String(phone);
  maskPhone = maskPhone.replace(/\D/g, '');
  maskPhone = maskPhone.replace(/^(\d{2})(\d)/g, '($1) $2');
  maskPhone = maskPhone.replace(/(\d)(\d{4})$/, '$1-$2');

  return maskPhone;
};
