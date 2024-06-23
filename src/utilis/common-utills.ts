export class CommonUtils{
    static getUserInitals(userName:string|undefined){
        const rgx:RegExp = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

        const initials =userName && [...userName.matchAll(rgx)] || [];
        
      return  (
          (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
        ).toUpperCase();
    }
    static addMinutes( minutes:number) {
        return new Date(new Date().getTime() + minutes*60000);
    }
}

