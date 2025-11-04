public class Main{
  int x;
  public Main()
  {
    x=111;
  }
  public void king(){
    System.out.println("TES");
  }
  public void queen()
  {
    System.out.println("MO");
  }
 
  public static void main(String args[]) {
    Main obj=new Main();
    obj.king();
    obj.queen();
    System.out.println(obj.x);
  
    
  }
}