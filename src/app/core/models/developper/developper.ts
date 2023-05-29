export interface Developper {
      id?: string;
      first_name?:string
      last_name?:string
      email_address?:string
      phone?:string
      address?:string
      skills?:string
      image?:string
      linkedin?:string
      website?:string
      cv?:string
      github?:string
      gender?:string
      birthday?:Date
      description?:string
      bio?:string
      study_level?:string
      education?:string
      certificate?:string
      status?:string

 }
 export interface ResDevelopper{
  success?: boolean;
  developers:Developper[];
  // developer:Developper[];

}
export interface ResOneDevelopper{
  success?: boolean;
  developer:Developper;
}

export interface AddDevelopper{
  success?: boolean;
  developer:Developper;
}
