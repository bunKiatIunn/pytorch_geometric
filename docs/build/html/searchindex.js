Search.setIndex({docnames:["index","modules/data","modules/datasets","modules/nn","modules/transforms","modules/utils","notes/create_dataset","notes/installation","notes/introduction"],envversion:53,filenames:["index.rst","modules/data.rst","modules/datasets.rst","modules/nn.rst","modules/transforms.rst","modules/utils.rst","notes/create_dataset.rst","notes/installation.rst","notes/introduction.rst"],objects:{"torch_geometric.data":{Batch:[1,1,1,""],Data:[1,1,1,""],DataLoader:[1,1,1,""],Dataset:[1,1,1,""],DenseDataLoader:[1,1,1,""],InMemoryDataset:[1,1,1,""],download_url:[1,5,1,""],extract_tar:[1,5,1,""],extract_zip:[1,5,1,""]},"torch_geometric.data.Batch":{cumsum:[1,2,1,""],from_data_list:[1,3,1,""],num_graphs:[1,4,1,""]},"torch_geometric.data.Data":{apply:[1,2,1,""],cat_dim:[1,2,1,""],contains_isolated_nodes:[1,2,1,""],contains_self_loops:[1,2,1,""],contiguous:[1,2,1,""],from_dict:[1,3,1,""],is_coalesced:[1,2,1,""],is_directed:[1,2,1,""],is_undirected:[1,2,1,""],keys:[1,4,1,""],num_classes:[1,4,1,""],num_edges:[1,4,1,""],num_features:[1,4,1,""],num_nodes:[1,4,1,""],to:[1,2,1,""]},"torch_geometric.data.Dataset":{download:[1,2,1,""],get:[1,2,1,""],process:[1,2,1,""],processed_file_names:[1,4,1,""],processed_paths:[1,4,1,""],raw_file_names:[1,4,1,""],raw_paths:[1,4,1,""]},"torch_geometric.data.InMemoryDataset":{collate:[1,2,1,""],download:[1,2,1,""],get:[1,2,1,""],num_classes:[1,4,1,""],num_features:[1,4,1,""],process:[1,2,1,""],processed_file_names:[1,4,1,""],raw_file_names:[1,4,1,""],shuffle:[1,2,1,""],split:[1,2,1,""]},"torch_geometric.datasets":{CoMA:[2,1,1,""],FAUST:[2,1,1,""],KarateClub:[2,1,1,""],MNISTSuperpixels:[2,1,1,""],ModelNet:[2,1,1,""],PPI:[2,1,1,""],Planetoid:[2,1,1,""],QM7:[2,1,1,""],QM9:[2,1,1,""],ShapeNet:[2,1,1,""],TUDataset:[2,1,1,""]},"torch_geometric.datasets.CoMA":{categories:[2,4,1,""],download:[2,2,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],url:[2,4,1,""]},"torch_geometric.datasets.FAUST":{download:[2,2,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],url:[2,4,1,""]},"torch_geometric.datasets.MNISTSuperpixels":{download:[2,2,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],url:[2,4,1,""]},"torch_geometric.datasets.ModelNet":{download:[2,2,1,""],process:[2,2,1,""],process_set:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],urls:[2,4,1,""]},"torch_geometric.datasets.PPI":{download:[2,2,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],url:[2,4,1,""]},"torch_geometric.datasets.Planetoid":{download:[2,2,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],url:[2,4,1,""]},"torch_geometric.datasets.QM7":{download:[2,2,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],url:[2,4,1,""]},"torch_geometric.datasets.QM9":{download:[2,2,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],url:[2,4,1,""]},"torch_geometric.datasets.ShapeNet":{categories:[2,4,1,""],download:[2,2,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],url:[2,4,1,""]},"torch_geometric.datasets.TUDataset":{download:[2,2,1,""],process:[2,2,1,""],processed_file_names:[2,4,1,""],raw_file_names:[2,4,1,""],url:[2,4,1,""]},"torch_geometric.nn":{conv:[3,0,0,"-"],meta:[3,0,0,"-"],pool:[3,0,0,"-"],prop:[3,0,0,"-"]},"torch_geometric.nn.conv":{ChebConv:[3,1,1,""],GATConv:[3,1,1,""],GCNConv:[3,1,1,""],GINConv:[3,1,1,""],GraphConv:[3,1,1,""],NNConv:[3,1,1,""],SAGEConv:[3,1,1,""],SplineConv:[3,1,1,""]},"torch_geometric.nn.conv.ChebConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.GATConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.GCNConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.GINConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.GraphConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.NNConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.SAGEConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.conv.SplineConv":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.dense":{diff_pool:[3,0,0,"-"]},"torch_geometric.nn.dense.diff_pool":{dense_diff_pool:[3,5,1,""]},"torch_geometric.nn.meta":{MetaLayer:[3,1,1,""]},"torch_geometric.nn.meta.MetaLayer":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.pool":{Set2Set:[3,1,1,""],TopKPooling:[3,1,1,""],avg_pool:[3,5,1,""],avg_pool_x:[3,5,1,""],global_add_pool:[3,5,1,""],global_max_pool:[3,5,1,""],global_mean_pool:[3,5,1,""],graclus:[3,5,1,""],max_pool:[3,5,1,""],max_pool_x:[3,5,1,""],voxel_grid:[3,5,1,""]},"torch_geometric.nn.pool.Set2Set":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.pool.TopKPooling":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.prop":{AGNNProp:[3,1,1,""],GCNProp:[3,1,1,""]},"torch_geometric.nn.prop.AGNNProp":{forward:[3,2,1,""],reset_parameters:[3,2,1,""]},"torch_geometric.nn.prop.GCNProp":{forward:[3,2,1,""]},"torch_geometric.transforms":{AddSelfLoops:[4,1,1,""],Cartesian:[4,1,1,""],Center:[4,1,1,""],Compose:[4,1,1,""],Constant:[4,1,1,""],Distance:[4,1,1,""],DropoutEdge:[4,1,1,""],DropoutX:[4,1,1,""],FaceToEdge:[4,1,1,""],LinearTransformation:[4,1,1,""],LocalCartesian:[4,1,1,""],NNGraph:[4,1,1,""],NormalizeFeatures:[4,1,1,""],NormalizeScale:[4,1,1,""],OneHotDegree:[4,1,1,""],Polar:[4,1,1,""],RadiusGraph:[4,1,1,""],RandomFlip:[4,1,1,""],RandomRotate:[4,1,1,""],RandomScale:[4,1,1,""],RandomShear:[4,1,1,""],RandomTranslate:[4,1,1,""],SamplePoints:[4,1,1,""],Spherical:[4,1,1,""],TargetIndegree:[4,1,1,""],ToDense:[4,1,1,""],TwoHop:[4,1,1,""]},"torch_geometric.utils":{accuracy:[5,5,1,""],add_self_loops:[5,5,1,""],contains_isolated_nodes:[5,5,1,""],contains_self_loops:[5,5,1,""],degree:[5,5,1,""],dense_to_sparse:[5,5,1,""],f1_score:[5,5,1,""],false_negative:[5,5,1,""],false_positive:[5,5,1,""],grid:[5,5,1,""],is_undirected:[5,5,1,""],normalized_cut:[5,5,1,""],one_hot:[5,5,1,""],precision:[5,5,1,""],recall:[5,5,1,""],remove_self_loops:[5,5,1,""],softmax:[5,5,1,""],to_networkx:[5,5,1,""],to_scipy_sparse_matrix:[5,5,1,""],to_undirected:[5,5,1,""],true_negative:[5,5,1,""],true_positive:[5,5,1,""]},torch_geometric:{data:[1,0,0,"-"],datasets:[2,0,0,"-"],transforms:[4,0,0,"-"],utils:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:attribute","5":"py:function"},terms:{"3dshapenet":2,"abstract":6,"byte":8,"case":[6,7],"class":[1,2,3,4,6,8],"default":[3,4,5,6,8],"final":[6,8],"float":[3,4,8],"function":[3,6,7,8],"import":[3,4,5,6,7,8],"int":[3,4,5],"long":8,"new":8,"return":[3,5,6,8],"short":8,"static":1,"super":[3,6,8],"true":[1,2,3,4,7,8],"try":8,For:[6,8],That:8,The:[3,4,5,6,8],There:8,These:7,Use:6,__getitem__:6,__init__:[3,6,8],__len__:6,__version__:7,about:8,abs:3,acc:8,access:[6,7,8],accord:6,accuraci:[5,8],achiev:8,acitiv:8,actual:7,adam:8,adapt:[],add:[3,4,7],add_self_loop:5,addit:[0,3,6,8],addselfloop:4,adj:3,adjac:8,advanc:7,after:8,against:8,aggreg:3,agnn:3,agnnprop:3,airplan:[2,8],all:[6,7,8],allow:[3,8],along:4,alreadi:[6,8],also:0,although:6,amazonaw:2,anaconda:7,analog:6,angl:3,ani:[3,8],anoth:8,anytim:8,appli:[1,4,6,8],arbitrari:[0,8],arg:[],argument:[3,8],arxiv:3,assign:[3,8],asssign:[],attent:3,attribut:[4,8],augment:[6,8],automat:[6,8],avail:6,averag:[3,8],avg_pool:3,avg_pool_x:3,axi:4,backward:8,bag:2,bareteeth:2,base:[0,3,7],basi:3,basic:[],batch:[0,1,3],batch_siz:[1,8],becaus:6,befor:[6,8],being:[4,6,8],below:7,benchmark:0,besid:8,best:6,between:8,bia:3,bias:3,bin:7,block:8,blog:8,bodi:6,bool:[3,4],both:0,brief:6,brows:8,build:3,call:[3,7],callabl:3,can:[6,7,8],cap:2,car:2,care:8,cartesian:4,cat:[3,4],cat_dim:1,categori:[2,8],ccompil:7,center:4,cffi:7,chain:8,chair:2,chebconv:3,chebyshev:3,check:7,cheeks_in:2,chemistri:[],citat:8,cites:8,classfic:3,classif:8,clean:8,clone:7,close:3,cloud:[0,8],cluster:[3,7],cmd:7,coalesc:[],code:6,coeffici:3,col:3,collat:[1,6],column:8,com:[2,7],coma:2,come:[7,8],common:0,compil:7,complet:8,compos:[4,8],composit:8,comput:[3,4,5],concat:[3,4],concaten:[6,8],concept:[6,8],connect:[3,8],consist:[0,8],constant:4,constructor:6,contain:[6,8],contains_isolated_nod:[1,5,8],contains_self_loop:[1,5,8],contigu:1,continu:[3,6],contrast:4,conv1:8,conv2:8,conv:7,convert:8,convolut:8,convolv:3,coo:8,coordin:[3,4],cora:8,core:8,correct:8,correctli:7,correspond:4,cpath:7,cpu:[7,8],creat:[0,7,8],cuda:8,cumsum:1,current:3,cvpr:3,cvpr_geometric_dl:2,data:[0,2,3,4,6],data_1:6,data_2:6,data_:6,data_list:[1,6],data_url:[],dataload:[1,6,8],dataset:[0,1],decrib:8,deep:[0,3],deepchem:2,def:[3,6,7,8],defin:[3,4,8],degre:[3,4,5],denot:8,dens:3,dense_diff_pool:3,dense_to_spars:5,densedataload:1,densediffpool:[],desir:[],determin:3,devic:[1,5,8],diagon:8,dictionari:[1,6],differ:8,differenti:3,dim:[3,8],dim_siz:3,dimens:[4,8],dimension:[3,4],directori:8,disk:[6,8],distanc:4,distribut:8,distutil:7,docker:7,document:8,doing:8,done:6,dortmund:[2,8],download:[1,2,6,8],download_url:1,drei:2,dropout:[3,8],dropoutedg:4,dropoutx:4,dry_run:7,dtype:[4,5,8],dure:3,dynam:6,each:[3,4,6,8],earli:8,earphon:2,easi:0,easiest:8,echo:7,edg:[3,4,5,8],edge_attr:[1,3,4,5,8],edge_index:[1,3,4,5,8],edge_mlp:3,edge_model:3,edu:2,els:8,encod:4,end:3,ensur:7,entri:3,environ:7,enzym:8,epoch:8,eps:3,equival:8,error:7,euclidean:4,eval:8,evalu:8,even:8,exactli:8,exampl:[0,6],expect:8,experi:8,explan:8,expos:3,extend:8,extens:0,extract:6,extract_tar:1,extract_zip:1,eyebrow:2,f1_score:5,f_e:3,f_u:3,f_x:3,face:8,facetoedg:4,fact:8,factor:4,fals:[3,8],false_neg:5,false_posit:5,fashion:8,fast:3,faster:8,faust:[2,8],featur:[3,4,8],fei:3,ffi:7,fifth:3,figshar:[],file:[6,7],filter:[3,6],find:[6,8],first:8,fit:6,fix:4,flip:4,folder:[1,6],follow:[6,7,8],forget:7,format:[6,8],forward:[3,8],found:[6,8],four:[6,8],from:[0,3,4,5,6,7,8],from_data_list:1,from_dict:1,func:[1,3],fundament:[6,8],further:6,gat:3,gatconv:3,gcn:8,gcnconv:[3,8],gcnprop:3,gdb9:[],gener:8,geometr:[3,6,7,8],get:[1,6],gilmer:[],ginconv:3,git:7,github:[2,7],give:6,given:[4,5],global:[3,4],global_add_pool:3,global_max_pool:3,global_mean_pool:3,global_mlp:3,global_model:3,gnn:[],gnn_pool:[],gpu:[7,8],graclu:3,graph:[0,3,6],graphconv:3,graphkernel:8,graphkerneldataset:2,graphsag:2,grid:5,guitar:2,hack:8,hand:8,happen:6,happi:8,has:[3,6],have:[6,7,8],head:3,heavi:6,height:5,help:[0,6],here:[6,8],hidden_channel:3,hierarch:3,high:8,high_smil:2,hold:8,hop:3,hot:4,how:6,howev:6,http:[2,3,7,8],huge:6,iccv17:2,identifi:8,idx:[1,6],imag:[7,8],implement:[6,7,8],improv:3,in_channel:3,includ:7,index:[0,1,5],indic:5,individu:[6,8],induct:3,inform:8,inherit:[6,8],initi:8,inmemorydataset:[1,6],input:[3,8],inspir:3,instal:0,instanc:8,instead:4,interfac:0,interv:4,introduc:[7,8],introduct:[0,6],involv:6,irregular:0,is_avail:[7,8],is_coalesc:1,is_direct:[1,8],is_open_splin:3,is_undirect:[1,5,8],issu:7,item:[1,8],its:[3,4,8],join:6,karateclub:2,kei:[1,8],kernel:[3,7],kernel_s:3,kimiyoung:2,kind:3,knife:2,known:0,kwarg:1,label:8,lambda:[],lamp:2,laptop:2,larg:[0,8],layer:8,lead:8,leakyrelu:3,learn:[0,3],least:7,len:[6,8],let:[6,8],level:[3,8],librari:0,lin:3,linear:[3,8],lineartransform:4,link:[4,7],lips_back:2,lips_up:2,list:[4,6,8],load:[6,8],loader:[0,8],local:[3,4,7],localcartesian:4,log:1,log_softmax:8,logic:6,longtensor:5,look:[6,8],loss:8,lot:[6,7],ls11:2,ls7:2,magic:6,mai:[6,7,8],main:8,mani:6,manual:6,map:[3,4],mask:3,mask_url:[],master:2,mat:2,matmul:[],matric:8,matrix:[4,8],max:[3,8],max_degre:4,max_pool:3,max_pool_x:3,maximum:4,meaning:7,mesh:[0,8],messag:7,meta:3,metalay:3,method:[0,6],mini:0,miniconda:7,mnist_superpixel:2,mnistsuperpixel:2,mode:1,model:8,modelnet10:[2,8],modelnet40:2,modelnet:2,modul:[0,3,8],more:8,morri:2,motorbik:2,mouth_down:2,mouth_extrem:2,mouth_middl:2,mouth_open:2,mouth_sid:2,mouth_up:2,mpg:2,mug:2,multi:3,must:6,myowndataset:6,name:[2,8],ndownload:[],nearest:8,need:[6,7,8],neg:3,negative_slop:3,neighbor:8,neighborhood:3,net:[3,8],network:[3,8],neural:[3,8],newli:7,next:8,nll_loss:8,nnconv:3,nngraph:[4,8],node:[3,4,5,8],node_mlp:3,node_model:3,non:8,none:[1,2,3,4,5,6,8],norm:3,norm_emb:3,normal:[3,4],normalized_cut:5,normalizefeatur:4,normalizescal:4,notat:8,note:[0,6,7,8],now:8,num:4,num_class:[1,5,8],num_dimens:8,num_edg:[1,8],num_edge_featur:8,num_fac:8,num_featur:[1,8],num_graph:[1,8],num_lay:3,num_nod:[1,3,4,5,8],num_node_featur:8,number:[0,3,4,5,8],nvcc:7,obj:[],object:[4,6,8],occur:7,offlin:4,old:8,omit:8,onc:6,one:[4,6,8],one_hot:5,onehotdegre:4,onli:[6,8],open:3,oper:[3,8],ops:6,optim:8,option:[3,4,5,6,7],order:[6,7],org:3,osp:6,other:[0,4,7],our:8,out:[3,6,8],out_channel:3,output:[3,5,8],outsourc:7,over:[3,8],own:[0,7,8],packag:[0,7],pairwis:8,paper:[0,3],parallel:8,param:[],paramet:[3,4,5,8],partseg:2,pass:[6,8],path:[1,6,7],peopl:2,per:8,perform:8,perm:8,permut:8,pip:7,pistol:2,plain:8,planetoid:[2,8],pleas:7,point:[0,8],polar:4,pool:8,pos:[1,3,4,5,8],posit:[4,8],post:8,ppi:2,pre_filt:[1,2,6],pre_transform:[1,2,6,8],precis:5,precomput:6,pred:[5,8],prevent:7,previous:8,princeton:2,print:[4,5,7,8],probabl:4,process:[1,2,3,6,8],process_set:2,processed_dir:6,processed_file_nam:[1,2,6],processed_path:[1,6],processing_step:3,product:3,project:2,propbabl:3,properti:6,provid:[6,8],pseudo:[3,4],publicli:6,publish:0,pubm:8,python:[6,7,8],pytorch:[6,7,8],pytorch_scatt:7,qm7:2,qm7b:2,qm9:[2,8],quantum:[],radiusgraph:4,random:[4,8],randomflip:4,randomli:[4,8],randomrot:4,randomscal:4,randomshear:4,randomtransl:[4,8],randperm:8,rang:[4,8],rare:7,ratio:3,raw:[2,6],raw_dir:6,raw_file_nam:[1,2,6],raw_path:[1,6],read:6,real:6,realli:6,recal:5,receiv:8,recommend:7,reconstruct:6,record:6,refer:0,relat:[3,4,8],relu:[3,8],remove_self_loop:5,replac:[4,7],replic:8,represent:3,requir:8,requires_grad:3,reset_paramet:3,respect:[3,7],restrict:[6,8],result:4,rocket:2,roemisch:2,root:[1,2,3,6,7,8],root_weight:3,row:3,run:[7,8],rusty1:7,sageconv:3,same:[3,4],sampl:[3,4],samplepoint:4,save:[4,6,8],scale:4,scatter:[7,8],scatter_add:[],scatter_mean:[3,8],see:[6,8],self:[3,6,7,8],semi:[3,8],seq:3,sequenc:4,sequenti:3,set2set:3,set:3,setup:[6,7],sever:4,shape:[4,8],shapenet:[2,8],shear:4,shortli:8,should:[6,7],show:8,shuffl:[1,8],similar:6,simpl:[0,8],simpli:6,simplifi:6,singl:[3,6,8],size:[3,8],skateboard:2,skip:6,slice:[6,8],slope:3,slow:6,small:8,snap:2,soft:[],softmax:[5,8],some_file_1:6,some_file_2:6,sourc:[1,2,3,4,5,6],source_x:[],spars:[7,8],spatial:4,spawn:7,specif:[3,6],spectral:3,spheric:4,spline:[3,7],splinecnn:3,splineconv:3,split:[1,6,8],squar:4,src:[3,5],standard:8,stanford:2,start:3,step:[7,8],stochast:3,stop:8,straightforward:[6,8],structur:[0,3,8],studi:8,subprocess:7,succes:7,success:7,suit:7,sum:8,supervis:[3,8],support:7,system:7,tabl:2,take:[3,8],tar:2,target:[3,4,5,8],target_x:[],targetindegre:4,tensor:[3,4,5,8],termin:7,test:[7,8],test_dataset:8,test_mask:8,them:4,therefor:[6,7],thi:[6,8],three:[4,8],through:8,time:[3,8],tmp:8,to_networkx:5,to_scipy_sparse_matrix:5,to_undirect:5,todens:4,togeth:[4,8],top:[3,7],topkpool:3,torch:[3,4,5,6,7,8],torch_geometr:[0,6,8],torch_scatt:[3,8],torchvis:[6,8],train:[2,3,8],train_dataset:8,train_mask:8,trainabl:3,transfer:8,transform:[0,1,2,3,6],translat:[4,8],triangl:8,true_neg:5,true_posit:5,tudataset:[2,8],tue:2,tupl:[4,8],two:[4,6,8],twohop:4,type:[5,8],und:8,understand:8,undirect:8,unfortun:7,uni:2,uniqu:[],unsur:8,unweight:8,updat:3,upgrad:7,url:[1,2],use:[0,3,6,8],used:[4,6,8],useful:6,user:7,using:[3,8],usr:7,usual:8,util:[0,8],val_mask:8,valid:8,valu:4,vari:7,varieti:0,variou:[0,6,8],vector:8,veri:7,verifi:7,version:7,via:[6,8],vision:2,voxel_grid:3,wai:8,want:6,websit:2,weight:3,weight_decai:8,well:[0,3],west:2,what:6,where:[3,4,6,7,8],whether:[3,8],which:[3,6,7,8],whole:6,width:5,wise:[3,8],wish:6,within:[4,8],www:2,you:[6,7,8],your:[0,7,8],yourself:6,zero_grad:8,zip:2},titles:["PyTorch Geometric documentation","torch_geometric.data","torch_geometric.datasets","torch_geometric.nn","torch_geometric.transforms","torch_geometric.utils","Create your own dataset","Installation","Introduction by example"],titleterms:{batch:8,benchmark:8,common:8,content:3,convolut:3,creat:6,cuda:7,data:[1,8],dataset:[2,6,8],document:0,exampl:8,extens:7,geometr:0,graph:8,handl:8,indic:0,instal:7,introduct:8,larger:6,layer:3,learn:8,maco:7,memori:6,method:8,mini:8,own:6,pool:3,propag:3,pytorch:0,tabl:0,torch_geometr:[1,2,3,4,5],transform:[4,8],util:5,your:6}})